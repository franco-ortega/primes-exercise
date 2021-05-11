// console.log('Is this working?');


function primeNumbers(n) {
    // console.log('Top of function.')

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

        do {
            console.log('start of OUTER loop')
            primeNumber++;
            let divider = 2;
            let candidate = 0;

            do {
                console.log('start of INNER loop')
                if(primeNumber % divider !== 0) {
                    candidate = primeNumber;
                    console.log(primes);
                    divider++;
                    console.log(divider);
                } else {
                    console.log('else')
                    divider++;
                };
            } while (primeNumber % divider > 1);

            if(candidate !== 0) primes.push(candidate);

            console.log('end of INNER loop');
            

        } while (primes.length < n);
        console.log('end of OUTER loop');
    }

    console.log(primes);
    console.log('Bottom of function.')
    
    if(primes.length === n) return primes;
};

console.log(primeNumbers(1000));

// STRENGTHS
// returns the correct amount of numbers
// filters out some non-prime numbers
// it didn't time out with 1000 numbers

// WEAKNESSES
// returns some numbers that aren't prime
// it took at least a few minutes to collect 1000 numbers