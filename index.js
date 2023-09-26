const digitize = (n) =>
  n
    .toString()
    .split('')
    .reverse()
    .map((n) => parseFloat(n));

digitize(2635353);
