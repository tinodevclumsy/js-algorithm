/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var sum = n < 10 ? Math.pow(n, 2) : n;

    while(4 < sum) {
        var numbers = sum.toString().split('');
        var tempSum = 0;
        for(var i = 0; i < numbers.length; i++) {
            tempSum += Math.pow(numbers[i], 2)
        }
        sum = tempSum;
    }

    return sum === 1
};

// optimized

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const getNext = (num) => {
        let sum = 0;
        while (num > 0) {
            const digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    };

    let slow = n;
    let fast = getNext(n);
    
    while (fast !== 1 && slow !== fast) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }

    return fast === 1;
};
