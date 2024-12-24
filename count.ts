import { cssPropertyList as chromeList } from './util/all-css-properties-in-chrome'
import { cssPropertyList as chromeCanaryList } from './util/all-css-properties-in-chrome-canary'
import { cssPropertyList as edgeList } from './util/all-css-properties-in-edge'
import { cssPropertyList as firefoxList } from './util/all-css-properties-in-firefox'
import { cssPropertyList as operaList } from './util/all-css-properties-in-opera'

const browserMap = {
  chromeList,
  chromeCanaryList,
  edgeList,
  firefoxList,
  operaList,
}
const browserList = Object.keys(browserMap)

// count all
for (const listName of browserList) {
  console.log(`List name: ${listName}`)
  console.log(`Count: ${browserMap[listName].length}`)
  console.log('')
}
