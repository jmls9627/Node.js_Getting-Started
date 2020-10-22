const mystery="answer";
const Pi=Math.PI;

const obj = {
  p1: 10,
  p2: 20,
  f1() {},
  f2: () => {},
  [mystery]:42,   //obj.answer=42      obj.mystery=undefined 
  Pi, // PI:Pi,
};
