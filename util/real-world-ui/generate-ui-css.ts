import fs from 'node:fs'
import { cssPropertyMap } from './reduced-common-css-by-group'
import { cssPropertyDefaultValueMap } from './css-property-default-value'

// get unique group
const cssPropertyByGroupMap = {}
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

const camelToKebabCase = (str = '') => {
  return str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
}

// generate CSS class names and body
for (const groupName of cssPropertyByGroupList) {
  const cssString = `.wow-ui-${groupName} {
  ${cssPropertyByGroupMap[groupName].map((cssProperty) => {
    const kebabProperty = camelToKebabCase(cssProperty)
    return `--${kebabProperty}: ${
      cssPropertyDefaultValueMap[cssProperty] || 'initial'
    };
  ${kebabProperty}: var(--${kebabProperty});
`
  }).join(`
  `)}
}`

  fs.writeFileSync(
    `util/real-world-application/css/${groupName}.css`,
    cssString
  )
}
