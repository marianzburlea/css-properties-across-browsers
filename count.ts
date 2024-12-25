import { cssPropertyList as chromeList } from './util/all-css-properties-in-chrome'
import { cssPropertyList as chromeCanaryList } from './util/all-css-properties-in-chrome-canary'
import { cssPropertyList as edgeList } from './util/all-css-properties-in-edge'
import { cssPropertyList as firefoxList } from './util/all-css-properties-in-firefox'
import { cssPropertyList as operaList } from './util/all-css-properties-in-opera'
import { cssPropertyList as safariList } from './util/all-css-properties-in-safari'

const browserMap = {
  chromeList,
  chromeCanaryList,
  edgeList,
  firefoxList,
  operaList,
  safariList,
} as const

type TBrowserList = keyof typeof browserMap

const browserList = Object.keys(browserMap) as TBrowserList[]

// count all for each browser
for (const listName of browserList) {
  console.log(`List name: ${listName}`)
  console.log(`Count: ${browserMap[listName].length}`)
  console.log('')
}

// count all unique in all browsers
console.log(''.padEnd(25, '#'))

const allUnique = [
  ...new Set(
    browserList.reduce((acc, cur) => acc.concat(browserMap[cur as string]), [])
  ),
]

console.log('All unique count')
console.log(allUnique.length)
console.log('')
console.log(''.padEnd(25, '#'))

// count all common in all browsers
console.log(''.padEnd(25, '#'))

const kebabToCamelCase = (str = '') => {
  return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase())
}

const allCSSCountFound = {}
for (const listName of browserList) {
  for (const cssPropUnknownStyle of browserMap[listName]) {
    if (
      !cssPropUnknownStyle.startsWith('--') &&
      !cssPropUnknownStyle.startsWith('-webkit') &&
      !cssPropUnknownStyle.startsWith('webkit') &&
      !cssPropUnknownStyle.startsWith('-apple') &&
      !cssPropUnknownStyle.startsWith('-moz') &&
      cssPropUnknownStyle.length > 2
    ) {
      const cssProp =
        cssPropUnknownStyle.indexOf('-') > -1
          ? kebabToCamelCase(cssPropUnknownStyle)
          : cssPropUnknownStyle

      if (Object.prototype.hasOwnProperty.call(allCSSCountFound, cssProp)) {
        allCSSCountFound[cssProp] += 1
      } else {
        allCSSCountFound[cssProp] = 1
      }
    }
  }
}

console.log(allCSSCountFound)
const allCommonCSSPropList = Object.keys(allCSSCountFound).filter(
  (cssCountKey) => allCSSCountFound[cssCountKey] === browserList.length
)
console.log(JSON.stringify(allCommonCSSPropList))
console.log(allCommonCSSPropList.length)
