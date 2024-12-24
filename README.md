# Research All CSS properties in major browsers

Note: Check the how to use the `getAllCssPropertyList` function in the `get-all-css-property-list.js` file.

## Initial run

I've run this function in **Google Chrome** and I found 639 CSS properties.

## Run in another browser

I've made a file `count.ts` that logs how many properties found in each browser.
This is what I saw in the log:

```
bun count.ts
List name: chromeList
Count: 639

List name: chromeCanaryList
Count: 643
```
