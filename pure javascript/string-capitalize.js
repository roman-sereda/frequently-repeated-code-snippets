// capitalizes the first letter of a string
// if lowerRest === true - capitalize first letter and lowercase rest of the string

const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));
