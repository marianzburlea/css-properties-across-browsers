import fs from 'fs'
import {
  cssCondensedPropertyMap,
  cssPropertyMap,
} from './reduced-common-css-by-group'
import { cssDefaultPropertyValueMap } from './default-value-map'

// get unique group
const cssPropertyByGroupMap = {}
const cssPropertyByGroupList: string[] = []
const finalCssClassMap: Record<
  string,
  {
    className: string
    row: string[]
  }
> = {}

for (const cssProperty in cssPropertyMap) {
  const groupName: string = cssPropertyMap[cssProperty]

  if (Array.isArray(cssPropertyByGroupMap[groupName])) {
    cssPropertyByGroupMap[groupName] =
      cssPropertyByGroupMap[groupName].concat(cssProperty)
  } else {
    cssPropertyByGroupMap[groupName] = [cssProperty]
    cssPropertyByGroupList.push(groupName)
  }
}

const camelToKebabCase = (str = '') => {
  return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
}

// generate CSS class names and body
for (const className of cssPropertyByGroupList) {
  const row: string[] = []
  cssPropertyByGroupMap[className].map((cssProperty) => {
    const kebabProperty = camelToKebabCase(cssProperty)

    row.push(
      `--${kebabProperty}: ${
        cssDefaultPropertyValueMap[cssProperty] || 'initial'
      }`
    )

    row.push(`${kebabProperty}: var(--${kebabProperty})`)
  })

  finalCssClassMap[className] = {
    className,
    row,
  }

  // fs.writeFileSync(`css/${groupName}.css`, cssString)
}

// console.log(finalCssClassMap.flex)

for (const cssCamelCaseProperty in cssCondensedPropertyMap) {
  const className = camelToKebabCase(
    cssCondensedPropertyMap[cssCamelCaseProperty].className
  )

  const row: string[] = []
  const subPropList = Object.keys(
    cssCondensedPropertyMap[cssCamelCaseProperty].children
  )

  subPropList.map((subProp) => {
    const kebabProperty = `${className}-${camelToKebabCase(subProp)}`
    const resetVar = `--${kebabProperty}: ${cssCondensedPropertyMap[cssCamelCaseProperty].children[subProp]}`

    row.push(resetVar)
    row.push(`${kebabProperty}: var(--${kebabProperty})`)
  })

  const map = {
    className,
    row: (finalCssClassMap[className]?.row || []).concat(row),
  }

  finalCssClassMap[className] = map
}

// generate mobile, tablet, and desktop
const mobile: string[] = []
const tablet: string[] = []
const desktop: string[] = []

// tablet
const getTabletWrap = (
  css = '',
  breakPoint = 768
) => `@media screen and (min-width: ${breakPoint / 16}rem) {
${css}
}`

// desktop
const getDesktopWrap = (
  css = '',
  breakPoint = 1280
) => `@media screen and (min-width: ${breakPoint / 16}rem) {
${css}
}`

for (const map of Object.keys(finalCssClassMap)) {
  const className = finalCssClassMap[map].className

  // mobile
  const cssRawMobile = `.${className} {
${finalCssClassMap[map].row.join(`;
`)}
}`
  mobile.push(cssRawMobile)
  fs.writeFileSync(`css/mobile/${className}.css`, cssRawMobile)

  // tablet
  const cssRawTablet = `  .tablet.${className} {
    ${finalCssClassMap[map].row.join(`;
    `)}
  }`

  tablet.push(cssRawTablet)
  const cssTablet = getTabletWrap(cssRawTablet)

  fs.writeFileSync(`css/tablet/${className}.css`, cssTablet)

  // desktop
  const cssRawDesktop = `  .desktop.${className} {
    ${finalCssClassMap[map].row.join(`;
    `)}
  }`

  desktop.push(cssRawDesktop)
  const cssDesktop = getDesktopWrap(cssRawDesktop)
  fs.writeFileSync(`css/desktop/${className}.css`, cssDesktop)
}

const allMobile = mobile.join('\n')
// mobile
fs.writeFileSync('css/mobile.css', allMobile)
const allTablet = getTabletWrap(tablet.join('\n'))
// tablet
fs.writeFileSync('css/tablet.css', allTablet)
const allDesktop = getDesktopWrap(desktop.join('\n'))
// desktop
fs.writeFileSync('css/desktop.css', allDesktop)
// all
fs.writeFileSync(
  'css/all.css',
  `
${allMobile}
${allTablet}
${allDesktop}
`
)
