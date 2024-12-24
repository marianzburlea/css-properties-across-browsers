const getAllCssPropertyList = (element) => {
  if (!element) {
    console.error('Please provide a valid DOM element.');
    return [];
  }

  // Get computed styles of the element
  const styles = window.getComputedStyle(element);

  // Use Array.from and iterate over the style property names
  const cssPropertyList = Array.from(styles).filter((property) => {
    return typeof property === 'string';
  });

  return cssPropertyList;
};

// Example usage:
// Pass any DOM element to the function
const propertyList = getAllCssPropertyList(document.body);
console.log('All CSS property list:');
console.log(JSON.stringify(propertyList));