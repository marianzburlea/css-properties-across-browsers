import { cssPropertyMap } from './common-css-by-group'

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
  console.log(`.wow-ui-${groupName} {
  ${cssPropertyByGroupMap[groupName].map((cssProperty) => {
    const kebabProperty = camelToKebabCase(cssProperty)
    return `--${kebabProperty}: initial;
  ${kebabProperty}: var(--${kebabProperty});
`
  }).join(`
  `)}
}`)
}
