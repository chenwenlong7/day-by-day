/*
 * @Author: LeslieChen 
 * @Date: 2022-07-09 16:14:31 
 * @Last Modified by: LeslieChen
 * @Last Modified time: 2022-07-09 16:43:42
 */

//实现一个compose函数
// 用法如下:
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11

function compose(...fn) {
  if (!fn.length) return (v) => v;
  if (fn.length === 1) return fn[0];
  return fn.reduce(
    (pre, cur) =>
      (...args) =>
        pre(cur(...args))
  );
}