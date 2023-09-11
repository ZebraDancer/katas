const openOrSenior = (data) => {
  const array = [];

  for (const person of data) {
    if (person[0] >= 55 && person[1] > 7) {
      array.push('Senior');
    } else {
      array.push('Open');
    }
  }
  return array;
};

openOrSenior([
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
]);
