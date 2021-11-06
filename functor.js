'use strict';

const text = (s = '') => ({
  addline: (a) => text(`${s},${a}`),
  removeline:(b)=>text(s.replace(b,'')),
  toString: () => s,
});


const txt = text('line1')
  .addline('line2')
  .addline('line3')
  .removeline('line')
  .removeline('line');

console.log(`${txt}`);
console.log(txt + '');