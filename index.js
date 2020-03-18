// Your code here
function mapToNegativize(sourceArray){
    return sourceArray.map(e => e * (-1))
}
function mapToNoChange(sourceArray){
    return sourceArray.map(e => e);
}
function mapToDouble(sourceArray){
    return sourceArray.map(e => e * 2);
}
function mapToSquare(sourceArray){
    return sourceArray.map(e => e * e);
}

// console.log(mapToNegativize([1, 2, 3, -9]));

function reduceToTotal(sourceArray, startingPoint=0){
    return sourceArray.reduce((total, e) => total + e,startingPoint);
}
function reduceToAllTrue(sourceArray){
    let return_value = true;
    sourceArray.forEach(element => {
        if (element === false){
            return_value = false;
        }
    } )
    return return_value;    
}

function reduceToAnyTrue(sourceArray){
    let return_value = false;
    sourceArray.forEach(element => {
        if (element === true){
            return_value = true;
        }
    } )
    return return_value;  
}


