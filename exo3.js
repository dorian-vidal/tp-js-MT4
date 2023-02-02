const countDuplicates = (data) => {
  const result = [];
  data.forEach((x) => {
    const resultExist = result.find((y) => y && y.letter === x);
    if (resultExist) {
      resultExist.occurencies++;
    } else {
      result.push({ letter: x, occurencies: 1 });
    }
  });
  return result;
};

// result
const data = [
  1, 1, 2, 3, 4, 8, 8, 5, 6, 6, 9, 9, 10, 11, 12, 14, 48, 48, 51, 51, 1, 1, 1,
  51, 3, 3, 3, 51, 51, 51, 51, 51, 0,
];
console.log(countDuplicates(data));
