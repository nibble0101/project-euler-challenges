//Project Euler: Problem 1: Multiples of 3 and 5
function multiplesOf3and5(number) {
  let sum = 0;
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

//Project Euler: Problem 2: Even Fibonacci Numbers
function fiboEvenSum(n) {
  let cache = [1, 2],
    sum = 2;
  if (n < 3) {
    return sum;
  }
  while (cache[cache.length - 1] <= n) {
    const next = cache[cache.length - 1] + cache[cache.length - 2];
    if (next % 2 === 0) {
      sum += next;
    }
    cache.push(next);
  }
  return sum;
}
