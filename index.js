const mapToNegativize = array => {
  let newArr = [];
  array.forEach(ele => {
    newArr.push(ele * -1);
  });
  return newArr;
};

const mapToNoChange = array => {
  let newArr = [];
  array.forEach(ele => {
    newArr.push(ele);
  });
  return newArr;
};

const mapToDouble = array => {
  let newArr = [];
  array.forEach(ele => {
    newArr.push(ele * 2);
  });
  return newArr;
};

const mapToSquare = array => {
  let newArr = [];
  array.forEach(ele => {
    newArr.push(ele * ele);
  });
  return newArr;
};

const reduceToTotal = (array, start = 0) => {
  let res = start;
  array.forEach(ele => {
    res += ele;
  });
  return res;
};

function reduceToAllTrue(src) {
  for (let i = 0; i < src.length; i++) {
    if (!src[i]) return false;
  }
  return true;
}

function reduceToAnyTrue(src) {
  for (let i = 0; i < src.length; i++) {
    if (src[i]) return true;
  }
  return false;
}
