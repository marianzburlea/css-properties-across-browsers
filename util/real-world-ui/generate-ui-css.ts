import fs from 'fs'
import {
  cssCondensedPropertyMap,
  cssPropertyMap,
} from './reduced-common-css-by-group'
import { cssDefaultPropertyValueMap } from './default-value-map'

type TRow = {
  reset: {
    left: string
    right: string
  }[]
  declaration: {
    left: string
    right: string | string[]
  }[]
}

// get unique group
const cssPropertyByGroupMap = {}
const cssPropertyByGroupList: string[] = []
const finalCssClassMap: Record<
  string,
  {
    className: string
    row: TRow
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
  const row: TRow = {
    reset: [],
    declaration: [],
  }
  cssPropertyByGroupMap[className].map((cssProperty) => {
    const kebabProperty = camelToKebabCase(cssProperty)

    // row.push(
    //   `--${kebabProperty}: ${
    //     cssDefaultPropertyValueMap[cssProperty] || 'initial'
    //   }`
    // )
    row.reset.push({
      left: kebabProperty,
      right: cssDefaultPropertyValueMap[cssProperty] ?? 'initial',
    })

    row.declaration.push({
      left: kebabProperty,
      right: kebabProperty,
    })
  })

  finalCssClassMap[className] = {
    className,
    row,
  }

  // fs.writeFileSync(`css/${groupName}.css`, cssString)
}

console.log(finalCssClassMap.flex)

for (const cssCamelCaseProperty in cssCondensedPropertyMap) {
  const className = camelToKebabCase(
    cssCondensedPropertyMap[cssCamelCaseProperty].className
  )

  const row: TRow = {
    reset: finalCssClassMap[className]?.row.reset || [],
    declaration: finalCssClassMap[className]?.row.declaration || [],
  }

  const subPropList = Object.keys(
    cssCondensedPropertyMap[cssCamelCaseProperty].children
  )
  const condensedPropList = Array.isArray(
    cssCondensedPropertyMap[cssCamelCaseProperty].condensed
  )
    ? cssCondensedPropertyMap[cssCamelCaseProperty].condensed
    : []

  let notCondensedPropList: string[] = []
  if (Array.isArray(condensedPropList)) {
    notCondensedPropList = subPropList.filter(
      (subProp) => !condensedPropList.includes(subProp)
    )
  }
  // if (cssCamelCaseProperty === 'animation') {
  //   console.log('')
  //   console.log(cssCamelCaseProperty)
  //   console.log(condensedPropList)
  //   console.log(notCondensedPropList)
  //   console.log('')
  // }

  if (Array.isArray(condensedPropList) && condensedPropList.length > 0) {
    console.log('YES')
    condensedPropList.map((condensedProp) => {
      const kebabProperty = `${className}-${camelToKebabCase(condensedProp)}`
      row.reset.push({
        left: kebabProperty,
        right: cssDefaultPropertyValueMap[condensedProp] || 'initial',
      })
    })

    row.reset.push({
      left: cssCamelCaseProperty,
      right: cssDefaultPropertyValueMap[cssCamelCaseProperty] || 'initial',
    })

    const kebabProperty = camelToKebabCase(cssCamelCaseProperty)
    row.declaration.push({
      left: kebabProperty,
      right: [
        kebabProperty,
        ...condensedPropList.map((condensedProp) =>
          camelToKebabCase(condensedProp)
        ),
      ],
    })
  }

  notCondensedPropList.map((subProp) => {
    const kebabProperty = `${className}-${camelToKebabCase(subProp)}`

    row.reset.push({
      left: kebabProperty,
      right: cssDefaultPropertyValueMap[subProp] || 'initial',
    })

    row.declaration.push({
      left: kebabProperty,
      right: kebabProperty,
    })
  })

  if (
    !Object.prototype.hasOwnProperty.call(
      finalCssClassMap,
      cssCamelCaseProperty
    )
  ) {
    finalCssClassMap[className] = {
      className: camelToKebabCase(cssCamelCaseProperty),
      row,
    }
  }
}

console.log(JSON.stringify(finalCssClassMap.animation, null, 2))
console.log(Object.keys(finalCssClassMap))
// console.log(JSON.stringify(finalCssClassMap.borderTop, null, 2))

// Generate mobile, tablet, and desktop CSS
const allCss: {
  [key: string]: string[]
} = {
  mobile: [],
  tablet: [],
  desktop: [],
}

// Utility function to wrap CSS with a media query
const getMediaWrap = (css: string, breakPoint: number): string =>
  `@media screen and (min-width: ${breakPoint / 16}rem) {
${css}
}`

// Utility function to generate CSS for a specific device
const generateCss = (prefix: string, mapKey: string): string => {
  const className = finalCssClassMap[mapKey].className

  return `.${prefix ? `${prefix}.` : ''}${className} {
${finalCssClassMap[mapKey].row.reset
  .map(({ left, right }) => `  --${left}: ${right}`)
  .join(';\n')};

${finalCssClassMap[mapKey].row.declaration
  .map(({ left, right }) =>
    Array.isArray(right)
      ? `  ${left}: var(--${right[0]}, var(--${right[1]} ${right
          .slice(2)
          .map((prop) => `var(--${prop})`)
          .join(' ')}))`
      : `  ${left}: var(--${right})`
  )
  .join(';\n')}
}`
}

// Generate and save CSS for each device
const generateAndSaveCss = (
  device: string,
  prefix: string,
  breakPoint?: number
) => {
  for (const mapKey of Object.keys(finalCssClassMap)) {
    const cssRaw = generateCss(prefix, mapKey)
    allCss[device].push(cssRaw)
    fs.writeFileSync(
      `css/${device}/${finalCssClassMap[mapKey].className}.css`,
      cssRaw
    )
  }

  const joinedCss = allCss[device].join('\n')
  const wrappedCss = breakPoint
    ? getMediaWrap(joinedCss, breakPoint)
    : joinedCss

  fs.writeFileSync(`css/${device}.css`, wrappedCss)
  return wrappedCss
}

// Generate CSS for mobile, tablet, and desktop
const allMobile = generateAndSaveCss('mobile', '', undefined)
const allTablet = generateAndSaveCss('tablet', 'tablet', 768)
const allDesktop = generateAndSaveCss('desktop', 'desktop', 1280)

// Generate and save combined CSS
fs.writeFileSync(
  'css/all.css',
  `
${allMobile}
${allTablet}
${allDesktop}
`
)
