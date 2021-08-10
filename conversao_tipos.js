/**
 * Conversão de string
 */
var x;
// console.log(x.toString()); //TypeError: Cannot read property 'toString' of undefined
console.log(String(x)); // "undefined"
console.log("" + x); // "undefined"

// number para string
console.log(String(1)); // "1"
console.log(String(0)); // "0"
console.log(String(-1)); // "-1"

// boolean para string
console.log(String(true)); // "true"
console.log(String(false)); // "false"

//array para string
console.log(String([])); // ""
console.log(String([1])); // "1"
console.log(String([1, 2, 3])); // "1,2,3"

// objecto para string
var obj = { name: "João" };
console.log(obj.toString()); // [object Object]
console.log(JSON.stringify(obj)); // '{"name":"João"}'

// outros valores
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String(NaN)); // "NaN"

/**
 * Conversão de numeros(number)
 */

// string para integer
var b = "5";
console.log(Number(b)); // 5
console.log(parseInt(b)); // 5
console.log(+b); // 5
console.log("   10    "); // 10
console.log(Number("3.14")); // 3.14
console.log(Number("  ")); // 0
console.log(Number(" ")); // 0
console.log(Number("")); // 0

// boolean para integer
var bool = true;
console.log(Number(bool)); // 1
console.log(parseInt(bool)); // NaN
console.log(Number(+bool)); // 1
console.log(Number(true)); // 1
console.log(Number(false)); // 0
// outros valores
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
// dos NaN
console.log(Number("10a")); // NaN
console.log(Number("xyz")); // NaN
console.log(Number(NaN)); // NaN


/**
 * Conversao de boolean
 */

// number
console.log(Boolean(1)); // true
console.log(Boolean(0)) //false
console.log(Boolean(-1)) //true
// string
console.log(Boolean("")) //false
console.log(Boolean("a")) //true
console.log(Boolean(" ")) //true
console.log(Boolean("0")) //true
// outros valores
console.log(Boolean(undefined)) //false
console.log(Boolean(null)) //false
console.log(Boolean(NaN)) //false
console.log(Boolean([])) //true
console.log(Boolean({})) //true
