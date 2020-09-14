export {}

let list1 = [1, 3, 2, 4];
let list2 = [];
let list3 = ['MARIA', 'JOÃO', 'ANABELA'];

//map:

function double(x : number) : number {
  return x * 2;
}

function triple(x : number) : number {
  return x * 3;
}

let m1 = list1.map(double);
let m2 = list1.map(triple);
let m3 = list1.map(x => x * 5);

console.log('map-------------------');
console.log(m1);
console.log(m2);
console.log(m3);

//filter:

function pair(x : number) : boolean {
  return x % 2 == 0;
}

let f1 = list1.filter(pair);
let f2 = list1.filter(x => x % 2 != 0);
let f3 = list1.filter(x => x > 2);

console.log('filter-------------------');
console.log(list1.map(pair));
console.log(f1);
console.log(f2);
console.log(f3);

//reduce:
function sum(x : number, y : number) : number {
  return x + y;
}
function mult(x : number, y : number) : number {
  return x * y;
}

console.log('reduce-------------------');
console.log(list1.reduce(sum));
console.log(list1.reduce(mult));
console.log(list2.reduce(sum, 0));
console.log(list2.reduce(mult, 0));

//sort:
function sortNumber(x : number, y : number) : number {
  return y - x;
}
function sortString(x : string, y : string) : number {
  return y.length - x.length;
}

console.log('sort-------------------');
console.log(list1.sort(sortNumber));
console.log(list3.sort(sortString));
console.log(list1.sort((x, y) => x - y));
console.log(list1.sort((x, y) => y - x));