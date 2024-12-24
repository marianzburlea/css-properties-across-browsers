const getAllCssPropertyList = (element) => {
  if (!element) {
    console.error('Please provide a valid DOM element.')
    return []
  }

  // Get computed styles of the element
  const styles = window.getComputedStyle(element)

  // Extract all CSS property names
  const cssPropertyList = Object.keys(styles).filter((key) =>
    Number.isNaN(+key)
  )

  return cssPropertyList
}

// Example usage:
// Pass any DOM element to the function
const propertyList = getAllCssPropertyList(document.body)
console.log('All CSS property list')
console.log(propertyList)
