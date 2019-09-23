
const arrayOne = [1, 2, 3, 4];
const arrayTwo = [5, 6, 7, 8];

function zipList(arr1, arr2) {
  let newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    newArray += arr1[i];
    newArray += arr2[i];
  }
  return newArray;
}

console.log(zipList(arrayOne, arrayTwo));

function zipListTheSimpleWay(arr1, arr2) {
  return _.zip(arr1, arr2);
}

console.log(zipListTheSimpleWay(arrayOne, arrayTwo));
