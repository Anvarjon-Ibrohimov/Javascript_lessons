//1 Javascript number data type
let num=5; // butun son
let num1=5.4; // kasr son
console.log(num);
console.log(num1);
console.log(typeof num);
console.log(typeof num1);

//2. using e-

let x=123e3; // equal to 123*1000
let y=123e-3; // equal to 123* 0.001
console.log(x);
console.log(y);

//3. the maximum number of decmals 17
// let point=1.99999999999999986;
// console.log(point);

//4 Adding numbers to string
console.log(10+10); // number + number= number 20
console.log(10+'10'); //number + string =  string 1010
console.log(10+10+'10');// result 2010

//5 coverting string to numb
console.log("100"/'10'); // number
console.log("100"*'10'); // number
console.log("100"-'10'); // number
console.log("100"+'10'); // string

//6 NAN - not a number

console.log(5/'salom'); // Nan
console.log(isNaN(5/'salom'));
console.log(isNaN(5));

// toString() string tipiga o'tkazish
let numeric=10;
console.log(numeric.toString()); // 10
console.log(numeric.toString(2)); // ikkilik sanoq sistemasiga
console.log(numeric.toString(8)); // 8 lik
console.log(numeric.toString(16)); // 16 lik
console.log(numeric.toString(32)); // 32 lik