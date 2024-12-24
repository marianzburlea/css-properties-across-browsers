import { cssPropertyList as chromeList } from './util/all-css-properties-in-chrome'
import { cssPropertyList as chromeCanaryList } from './util/all-css-properties-in-chrome-canary'

const browserMap = { chromeList, chromeCanaryList }
const browserList = Object.keys(browserMap)

// count all
for (const listName of browserList) {
  console.log(`List name: ${listName}`)
  console.log(`Count: ${browserMap[listName].length}`)
  console.log('')
}
