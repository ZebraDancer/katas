function isIsogram(str) {
  return !str.match(/([a-z]).*\1/i);
}

//loop through the array and if a double character is found, add it to variable x. Return false is x not 0
isIsogram('ag');
