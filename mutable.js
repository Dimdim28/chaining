const number = (
  s,
  o = {
    sum: (a) => ((s += a), o),
    sub: (b) => ((s -= b), o),
    mult: (c) => ((s *= c), o),
    result:()=>s,
  }
) => o;

const num = number(6).sum(4).sub(9).mult(100);

console.log(num.result());