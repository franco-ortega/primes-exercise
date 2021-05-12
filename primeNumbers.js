function primeNumbers(n) {
    //Sample returns
    // n = 1: return 2 
    // n = 2: return 2, 3
    // n = 3: return 2, 3, 5
    // n = 4: return 2, 3, 7
    // if a number has a remainder, then it is not prime
    // check each number divided by a certain set of numbers, and when the remainder is 0, add that number to the prime group array, and then check the next number
    // generate a number of prime numbers equal to n
    // start at 3 for the prime numbers and then increment by one to get the new candidate
    // check validity of candidate: if passes, add to array; if fails, try next candidate
    // return array when length of array equal n

    const primes = [];

    if(n === 0) return primes;

    let primeNumber = 2;
    primes.push(primeNumber)

    if(n > 1) {
        // try dividing candidate by numbers greater than 1 and less than itself
        // divide candidate by 2 as the first test; if it fails, increment the 2 by 1, and so on until the divider is 1 less than the candidate
        // let divider = 2;

        // NEW COMMENTS
        //check to see if primeNumber is evenly divisible by 2
        //if so, be done; if not, see if it's divisible by one higher number and continue this until it reaches the number one below itself
        //if it reaches the number below and still isn't evenly divisble, then add it to the primes array
        primeNumber++;
        let divider = 2;
        let candidate = 0;
        let decider = false;

        do {
            do {
                if(primeNumber % divider !==0) {
                    candidate = primeNumber;
                    divider++;
                } else {
                    candidate = 0;
                    decider = true;
                };

                if(divider === primeNumber) decider = true;
    
            } while (decider === false);
    
            if(candidate !== 0) primes.push(candidate);
            primeNumber++;
            divider = 2;
            candidate = 0;
            decider = false;

        } while (primes.length < n);
    }

    console.log(primes.length);
    return primes;
};

console.log(primeNumbers(1000));

// STRENGTHS
// all returned items are prime numbers
// returns the correct amount of items
// completes in less than a second

// WEAKNESSES
// ?? uses a lot variables