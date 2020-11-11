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

//Project Euler: Problem 3: Largest prime factor
//Solution is inefficient. Doesn't pass all tests

function largestPrimeFactor(number) {
    const isPrime = (n) => {
        if(n < 2){
          return false;
        }
        for(let i = 2; i <= Math.sqrt(n); i++){
            if(n % i === 0){
              return false;
            };
        };
        return true;
    };
   if(isPrime(number)){
       return number;
   }
   for(let i = Math.floor(number/2); i > 1; i--){
       if(number % i === 0){
           if(isPrime(i)){
              return i;
           };
       };
   };
   
 };
 
// Project Euler: Problem 22: Names scores
function namesScores(arr) {
  arr.sort();
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  let totalScore = 0;
  arr.forEach((name, index) => {
    const position = index + 1;
    const worth = name.split('').reduce((acc, curr) => {
        return acc + alphabet.indexOf(curr.toLowerCase()) + 1;
    }, 0);
    totalScore += position * worth;
  })
  return totalScore;
}
 
 
