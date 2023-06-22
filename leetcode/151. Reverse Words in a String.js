/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var split = s.trim().split(" ").reverse()
    var str = ""

    for(var i = 0; i < split.length; i++) {
        if(split[i].length) {
            str += `${split[i].trim()} `
        }
    }

    return str.trim()
};

// optimized

var reverseWords = function(s) {
    const words = s.trim().split(/\s+/).filter(word => word.length > 0);
    const reversedWords = words.reverse();
    const reversedString = reversedWords.join(" ");

    return reversedString;
};