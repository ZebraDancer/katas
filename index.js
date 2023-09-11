const filter_list = (l) => {
  const array = l.filter((str) => str.length === undefined);
  return array;
};

filter_list([1, 2, 'a', 'b']);
