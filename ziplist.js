
const arrayOne = [1, 2, 3, 4];
const arrayTwo = ['a', 'b', 'c', 'd'];

function zipList(arr1, arr2) {
  const newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i]);
    newArray.push(arr2[i]);
  }
  return newArray;
}

console.log(zipList(arrayOne, arrayTwo));

function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}

console.log(zipListTheSimpleWay(arrayOne, arrayTwo));
