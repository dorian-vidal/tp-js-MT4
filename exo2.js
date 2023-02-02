function findMax(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}

const a = 5;
const b = 10;
const c = 7;

console.log(`Le maximum est : ${findMax(a, b, c)}`);
