const myRemove = (arr, item) => {
  const nwArr = [];
  for (let index = 0; index < arr.length; index += 1){
    if (arr[index] !== item) nwArr.push(arr[index]);
  }
  return nwArr;
}

module.exports = myRemove;