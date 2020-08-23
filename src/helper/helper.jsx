// generate a random int in [0, ub)
let generateRandomIntOpenUpperBound = (ub) => {
  return Math.floor(Math.random() * ub)
}

let generateRandomColor = () => {
  return(
  {
    red: generateRandomIntOpenUpperBound(256),
    green: generateRandomIntOpenUpperBound(256),
    blue: generateRandomIntOpenUpperBound(256)
  })
}

let generateColorArray = (len) => {
  var result = [];
  while (result.length < len){
    result.push(generateRandomColor());
  }
  return result;
}

export { generateColorArray , generateRandomColor, generateRandomIntOpenUpperBound };