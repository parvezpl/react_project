
const list=[2,3,4,5,6,7,8,9,10,11];

// const a= list.map(((num)=> num==3 ? num*num : num))
// const b= list.filter(((num)=> num!=3))
console.log(list);

const c = list.forEach(((num, intex, arr)=> arr[intex]=num*3 ))

// const d = list.map((num1)=> num1==4 ? true : false)

const b= list.filter(((num)=> num!==6))
console.log(b);