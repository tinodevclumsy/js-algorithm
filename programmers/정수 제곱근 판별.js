// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12934
// Number.isInteger

function solution(n) {
    if (Math.sqrt(n) !== parseInt(Math.sqrt(n))) {
       return -1
    } 
    
    return Math.pow(Math.sqrt(n) + 1, 2)
}