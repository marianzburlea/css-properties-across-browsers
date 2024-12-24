import { cssPropertyList as chromeList } from './util/all-css-properties-in-chrome'
import { cssPropertyList as chromeCanaryList } from './util/all-css-properties-in-chrome-canary'
import { cssPropertyList as edgeList } from './util/all-css-properties-in-edge'

const browserMap = { chromeList, chromeCanaryList, edgeList }
const browserList = Object.keys(browserMap)

// count all
for (const listName of browserList) {
  console.log(`List name: ${listName}`)
  console.log(`Count: ${browserMap[listName].length}`)
  console.log('')
}