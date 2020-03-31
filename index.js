// Your code here

const mapToNegativize = sourceArray => {
    let negArray = []
    for (let i = 0; i < sourceArray.length; i++) {
  
    
    negArray.push(sourceArray[i] * -1)
  
  }
  return negArray;
};

const mapToNoChange = sourceArray => {
    let Array = [] 
    for (let i = 0; i < sourceArray.length; i++) {
        Array.push(sourceArray[i])
    }
    return Array
}

const mapToDouble = sourceArray => {
    let doublerArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
      doublerArray.push(sourceArray[i] * 2)
    }
    return doublerArray
  }
  
  const mapToSquare = sourceArray => {
    let squareArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
      squareArray.push(sourceArray[i] * sourceArray[i])
    }
    return squareArray
  }
  
  const reduceToTotal = (sourceArray, startingPoint=0) => {
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++ ) {
      total = total + sourceArray[i]
    }
    return total
  }
  
  const reduceToAllTrue = sourceArray => {
    for (let i = 0; i < sourceArray.length; i++ ) {
      if (!sourceArray[i]) 
      return false 
    }
    return true
}
   
  
  const reduceToAnyTrue = sourceArray => {
    for (let i = 0; i < sourceArray.length; i++ ) {
      if (sourceArray[i]) 
      return true
    }
    return false
  }