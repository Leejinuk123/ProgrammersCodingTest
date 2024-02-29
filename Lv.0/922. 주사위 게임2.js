//https://school.programmers.co.kr/learn/courses/30/lessons/181930#
//22. 주사위 게임 2
function solution(a, b, c) {
    if( a == b && b == c ) return ( 3 * a ) * (3 * (a ** 2)) * (3 * (a ** 3)); 
    else if( a != b && b != c && a != c ) return (a + b + c); 
    else if( a == b || a == c || c == b ) return (a+b+c) * ((a*a) + (b*b) + (c*c)); 
}
