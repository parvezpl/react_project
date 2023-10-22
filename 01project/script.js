const list =[1,2,3,4,5]

const numb=[1,3, 8]

let imp=[];

// numb.map((num)=>list.filter(num))

const d =list.filter((num)=>numb.includes(num))


const a = list.filter((n)=>n==1)
const b = list.map((n)=>n==numb.filter((nn)=>nn==n) ? imp.push() : 0)
const c = list.find((n)=>n==5)


console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);