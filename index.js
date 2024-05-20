let M = 2;
let N = 100;

function isPrime(num) {
    if (num < 2) 
        return false;
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) 
            return false;
    }
    return true;
}


for( let i = M; i <= N; i++) {
    if (isPrime(i))
        console.log(i);
}