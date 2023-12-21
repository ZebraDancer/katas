const sortArray = (array) => {
const arr =  array.sort((a, b) => a%2 && b%2 ? a - b : null)
return arr
}

sortArray([5, 3, 1, 8, 0])