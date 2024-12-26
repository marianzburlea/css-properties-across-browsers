import fs from 'fs'
import {
  cssCondensedPropertyMap,
  cssPropertyMap,
} from './reduced-common-css-by-group'
import { cssDefaultPropertyValueMap } from './default-value-map'

// get unique group
const cssPropertyByGroupMap = {}
const cssCondensedropertyByGroupMap = {}
const cssPropertyByGroupList: string[] = []

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

for (const cssProperty in cssCondensedPropertyMap) {
  console.log(cssProperty, 'condensed')
  //
}

const camelToKebabCase = (str = '') => {
  return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
}

// generate CSS class names and body
for (const groupName of cssPropertyByGroupList) {
  const cssString = `.wow-ui-${groupName} {
  ${cssPropertyByGroupMap[groupName].map((cssProperty) => {
    const kebabProperty = camelToKebabCase(cssProperty)
    return `--${kebabProperty}: ${
      cssDefaultPropertyValueMap[cssProperty] || 'initial'
    };
  ${kebabProperty}: var(--${kebabProperty});
`
  }).join(`
  `)}
}`

  fs.writeFileSync(`css/${groupName}.css`, cssString)
}
