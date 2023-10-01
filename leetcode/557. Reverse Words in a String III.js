/**
 * @param {string} 
 * @return {string}
 */
var reverseWords = function(s) {
    var splittedStr = s.split(" ")
    for(var i = 0; i < splittedStr.length; i++) {
        splittedStr[i] = splittedStr[i].split('').reverse().join('')
    }
    return splittedStr.join(' ')  
}

// optimized

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const reverse = (start, end, str) => {
        while (start < end) {
            const temp = str[start];
            str[start] = str[end];
            str[end] = temp;
            start++;
            end--;
        }
    };

    const n = s.length;
    let str = s.split('');
    let start = 0;

    // Reverse the entire string
    reverse(0, n - 1, str);

    // Reverse each word
    for (let i = 0; i < n; i++) {
        if (str[i] === ' ' || i === n - 1) {
            const end = (i === n - 1) ? i : i - 1;
            reverse(start, end, str);
            start = i + 1;
        }
    }

    return str.join('');
};
