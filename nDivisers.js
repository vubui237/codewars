const divisions = (n, divisor) => {
let count = 0;
  while(n>divisor) {
  n = n / divisor;
  count++
  }
  return count;
};
