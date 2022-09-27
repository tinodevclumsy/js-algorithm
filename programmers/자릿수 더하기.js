// URL: https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n)
{
    return n.toString().split('').reduce((prev, number) => prev + Number(number), 0)
}