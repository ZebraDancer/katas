const removeSmallest = (number) => {
  let newArray = [...number];
  let smallestNumber = Math.min.apply(this, newArray);
  let index = newArray.indexOf(smallestNumber);
  newArray.splice(index, 1);
  console.log(newArray);
};
removeSmallest([2, 3, 4, 9, 5]);

//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
//Don't change the order of the elements that are left.
