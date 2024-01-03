/*
String data type- bu matnli tip
    * E’lon qilish turlari - “”; ‘’; ``;
    * \n - new line in single and double quotes
    * \t -tab
    * Str.length
    * Accesing character 
        * str[I];
        * Str.at(i)
    
    * the last character
    
        * str[str.lenght-1]
        * Str.at(-1)
    
    * String methods
        * IndexOf
        * lastindexOf
        * Search
        * Includes
        * Slice
        * Splice
        * Substring
        * Substr
        * Replace
        * Split
        * Repeat
        * startWith
        * endsWith
        * toLowercase
        * toUppercase
        * Trim


*/

//1 Declare qilish turlari
// let singlequote='Hello I am single';
// let doubleQuote="Hello I am double";
// let bactic=`Hello I am bactic`
// console.log(singlequote);
// console.log(doubleQuote);
// console.log(bactic);

//2 Difference between declaration

// single quote and doublequote works the same
// let single='hi i\'m single';
// let double="hi i'm single";
// console.log(single);
// console.log(double);

//3 new line \n
// let single='i\'m \n single';
// console.log(single);

//4 tab - \t
// let tab='\t i am tab';
// console.log(tab);

//5 the preferences of bactic

// let bactic =` i am 

// bactic`;
// console.log(bactic);

// let name='Frank';

// console.log(`hi my name is ${name}`);

//6 Accessing characters str
// let str='I am String element';
//* calling first elem

// console.log(str[0]);
// console.log(str.at(0));
// console.log(str.charAt(0));

//* the number of elem str.length
// console.log(str.length);

//* calling last elem

// console.log(str[str.length-1]);
// console.log(str.at(-1));

//* difference them
// console.log(str[-2]); //undefined
// console.log(str.at(-2)); //n

/*
 * String methods
        * IndexOf +
        * lastindexOf +
        * Search +
        * Includes +
        * Slice +
        * Substring +
        * Substr +
        * Replace +
        * Split +
        * Repeat +
        * startWith +
        * endsWith +
        * toLowercase +
        * toUppercase +
        * Trim +
*/

    //1 indexof,lastindexof
    let str='Hi i am str';
    
    // console.log(str.indexOf('i'));
    // console.log(str.lastIndexOf('i'));
    
    //2 search, includes,  startWith
    console.log(str.search('i')); //1
    console.log(str.includes('u')); //false
    console.log(str.includes('i',4)); // if it includes from 4 position , it is false
    console.log(str.startsWith('H')); //true
    console.log(str.endsWith('H')); //false

    //3 slice(start,end) substring(start,end) substr(start,length)
    console.log(str.slice(1,4)); //from start to end (not including end) ===	allows negatives
    console.log(str.substring(0,2));// 	between start and end (not including end) === negative values mean 0
    console.log(str.substr(0,2)); // 	from start get length characters === allows negative start
    
    //4 changing the case toLowercase,toUppercase
    console.log(str.toLowerCase());
    console.log(str.toUpperCase());

    //5 replace(a,b) changing a -> to b
    console.log(str.replace('str','string'));

    //6 repeat(count)
    console.log(str.repeat(2));

    //6 split
    console.log(str.split());
    console.log(str.split(""));
    console.log(str.split(" "));
    //7 trim it cuts whitespace from both beginning and end
    console.log("  hello  ".trim());