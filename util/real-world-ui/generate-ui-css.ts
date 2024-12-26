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

// console.log(finalCssClassMap.flex)

for (const map of Object.keys(finalCssClassMap)) {
  const className = finalCssClassMap[map].className
  console.log(className)
  fs.writeFileSync(
    `css/${className}.css`,
    `.${className} {
  ${finalCssClassMap[map].row.join(`;
  `)}
}`
  )
}
