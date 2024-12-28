export const generateShortKeys = (properties) => {
  const shortKeys = {}
  const seenKeys = new Set()

  const isAllLowercase = (str) => /^[a-z]+$/.test(str)

  // Process properties
  for (const key of Object.keys(properties)) {
    let shortKey = ''

    if (isAllLowercase(key)) {
      // All lowercase case
      for (let i = 1; i <= key.length; i++) {
        shortKey = key.slice(0, i) // Take the first `i` letters
        if (!seenKeys.has(shortKey)) break // Ensure uniqueness
      }
    } else {
      // Mixed lowercase and uppercase case
      const parts = key.match(/[A-Z]?[a-z]+/g) // Split camelCase into parts
      shortKey = parts
        .map((part, index) => (index === 0 ? part[0] : part[0].toLowerCase())) // First + uppercase letters
        .join('')

      let extraIndex = 0
      while (seenKeys.has(shortKey) && extraIndex < parts.length - 1) {
        extraIndex++
        shortKey += parts[extraIndex][1]?.toLowerCase() || '' // Add second letter if needed
      }
    }

    // Ensure uniqueness by appending additional letters as needed
    let uniqueKey = shortKey
    let extraIndex = shortKey.length
    while (seenKeys.has(uniqueKey)) {
      uniqueKey += key[extraIndex]?.toLowerCase() || '' // Add more letters from the key
      extraIndex++
    }

    // Store the result
    shortKeys[key] = uniqueKey
    seenKeys.add(uniqueKey)
  }

  return shortKeys
}
