// Your code here
const mapToNegativize = (a) => {
    let r = [];
    for (let i = 0; i<a.length; i++) {
        r.push(-1 * a [i])
    }
    return r
}

const mapToNoChange = a => {
    let r = [];
    for (let i = 0; i < a.length; i++) {
        r.push(a[i])
    }
    return r 
}

const mapToDouble = source => {
    let r = []
    for (let i = 0; i < source.length; i++ ) {
      r.push(2 * source[i])
    }
    return r
}

const mapToSquare = source => {
    let r = [];
    for (let i = 0; i < source.length; i++) {
        r.push(source[i] * source[i])
    }
    return r
}


const reduceToTotal = (sourceArray, startingPoint=0) => {
    let total = startingPoint;
    for ( let i = 0; i < sourceArray.length; i++) {
        total = total + sourceArray[i]
    }
    return total
}

const reduceToAllTrue = sourceArray => {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false
    } 
    return true
}

const reduceToAnyTrue = sourceArray => {
    for (let i = 0; i < sourceArray.length; i++) {
        if(sourceArray[i]) return true 
    }
    return false
}
