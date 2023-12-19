const order = (words) => {
  if(words.length === 0) {
    return ""
  }
  
  const array = words.split(" ")  
  
  const arrayRange = (start, stop, step) =>
      Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step
      );
  
  const range = arrayRange(1, 9, 1)
  
  let finalSentence = []
  
  for (const n of range) {
      for (const word of array) {
        if(word.includes(n)) {
          finalSentence.push(word)
        }
     }
  }

  //test
  
  return finalSentence.join(" ")
  
  }