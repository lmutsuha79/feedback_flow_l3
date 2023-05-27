export default function mergeArrays(array1, array2) {
  // The mergeArrays function combines objects from array1 and array2 into a new array, mergedArray.
  //  It gives priority to objects from array2 when there are duplicates based on the id value.
  const mergedArray = [];

  // Add objects from array2 to the merged array
  array2.forEach(function (obj) {
    mergedArray.push(obj);
  });

  // Check and add objects from array1 to the merged array
  array1.forEach(function (obj1) {
    var idExists = mergedArray.some(function (obj2) {
      return obj1.id === obj2.id;
    });

    if (!idExists) {
      mergedArray.push(obj1);
    }
  });

  return mergedArray;
}
