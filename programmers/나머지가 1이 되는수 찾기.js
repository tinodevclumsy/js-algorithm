// URL: https://school.programmers.co.kr/learn/courses/30/lessons/87389

function solution(n) {
    var index = 1
    
    while(index <= n) {
        if(n % index === 1) {
            return index
        }
            
        index++
    }
}