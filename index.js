// Your code here
const mapToNegativize = (sourceArray) => {
    let newArray = [] 
    for (let i = 0; i < sourceArray.length; i++){
        newArray.push(-1 * sourceArray[i])
    }
    return newArray
}

const mapToNoChange = (sourceArray) => {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i])
    }
    return newArray
}

const mapToDouble = (sourceArray) => {
    let newArray = [] 
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(2 * sourceArray[i])
    }
    return newArray
}

const mapToSquare = (sourceArray) => {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
      newArray.push(sourceArray[i] * sourceArray[i])
    }
    return newArray
  }

const reduceToTotal = (sourceArray, startingPoint=0) => {
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++) {
        total = total + sourceArray[i]
    }
    return total
}

const reduceToAllTrue = (sourceArray) => {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false
    }
    return true
}

const reduceToAnyTrue = (sourceArray) => {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) return true
    }
    return false
}

