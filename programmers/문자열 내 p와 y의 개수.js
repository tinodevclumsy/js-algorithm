// url: https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
  return (
    s.split("").filter((e) => e.toLowerCase() === "p").length ===
    s.split("").filter((e) => e.toLowerCase() === "y").length
  );
}
