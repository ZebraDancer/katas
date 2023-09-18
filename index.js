const findShort = (str) => {
  let str2 = str.split(' ').map((str) => {
    return str.length;
  });
  return Math.min(...str2);
};

findShort('bitcoin take over the world maybe who knows perhaps');
