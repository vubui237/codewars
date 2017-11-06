isPrime = (num) => {
  if(num === 0) {
    return false;
  }
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num !== 1;
}

check = (num) => {
  let prime = false;
  isPrime(num) ? prime = true : 0
  num.toString().split('').map((x)=> isPrime(x*1) ? prime = true : 0)
  return prime;
}

solve = (n) => {
  let arr = [];
  let count = 1;
	while(arr.length < n+1) {
      if(check(count) === false) {
        arr.push(count);
      }
      count++
    }
  return arr[n];
}
