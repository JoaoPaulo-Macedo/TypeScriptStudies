"use strict";
exports.__esModule = true;
var list1 = [1, 3, 2, 4];
var list2 = [];
var list3 = ['MARIA', 'JOÃO', 'ANABELA'];
//map:
function double(x) {
    return x * 2;
}
function triple(x) {
    return x * 3;
}
var m1 = list1.map(double);
var m2 = list1.map(triple);
var m3 = list1.map(function (x) { return x * 5; });
console.log('map-------------------');
console.log(m1);
console.log(m2);
console.log(m3);
//filter:
function pair(x) {
    return x % 2 == 0;
}
var f1 = list1.filter(pair);
var f2 = list1.filter(function (x) { return x % 2 != 0; });
var f3 = list1.filter(function (x) { return x > 2; });
console.log('filter-------------------');
console.log(list1.map(pair));
console.log(f1);
console.log(f2);
console.log(f3);
//reduce:
function sum(x, y) {
    return x + y;
}
function mult(x, y) {
    return x * y;
}
console.log('reduce-------------------');
console.log(list1.reduce(sum));
console.log(list1.reduce(mult));
console.log(list2.reduce(sum, 0));
console.log(list2.reduce(mult, 1));
//if array is empty, it will crash, for this not to happen, put a default starting value. In case of sum/sub is number 0, in case of mult/div is number 1. 
//sort:
function sortNumber(x, y) {
    return y - x;
}
function sortString(x, y) {
    return x.length - y.length;
}
console.log('sort-------------------');
console.log(list1.sort(sortNumber));
console.log(list3.sort(sortString));
console.log(list1.sort(function (x, y) { return x - y; }));
console.log(list1.sort(function (x, y) { return y - x; }));
console.log(list3.sort());
//the default sorting for strings, by first character
