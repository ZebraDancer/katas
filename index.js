const findNeedle = (array) => {
  let position = array.indexOf('needle');
  return `Found the needle at position ${position}`;
};

let haystack_2 = [
  '283497238987234',
  'a dog',
  'a cat',
  'some random junk',
  'a piece of hay',
  'needle',
  'something somebody lost a while ago',
];

findNeedle(haystack_2);
