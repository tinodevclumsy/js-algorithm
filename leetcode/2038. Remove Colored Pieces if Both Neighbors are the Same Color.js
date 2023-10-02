/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
    var counterA = 0;
    var counterB = 0;

    var winAlice = 0;
    var winBob = 0;

    for(var i = 0; i < colors.length; i++) {
        if(colors[i] === 'A') {
            counterA++
            if(counterA > 2) {
                winAlice++
            }
            counterB = 0
        } else {
            counterB++ 
            if(counterB > 2) {
                winBob++
            }
            counterA = 0
        }
    }

    return winAlice > winBob
};