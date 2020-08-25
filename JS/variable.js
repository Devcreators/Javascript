// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
"use strict";

// 2. Variable, rw(read/write)
// let (added in ES6)
let globaName = "global Name";
{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globaName);
}
console.log(name);
console.log(globaName);

// var (don't ever use this!)
// var hoisting (mave declaration from bottom to top)
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);

// 3. contant, r(read only)
// use const whenever possible.
// only use let if variable needs to change
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const dysInWeek = 7;
const maxNumber = 5;

/**
 * Note!
 * Immutale data types: premitive types, frozen objcets (i.e. object.freeze())
 * Mutable data types: all object by default are mutable in JS
 * favor immutable data type always for a few reasons:
 * - security
 * - thread safety
 * - reduce human mistakes
 */

// 4. Variable types
// primitive, single item: number, string, boolen, null, undefiedn, symbol
// object, box container
// function, first-class function

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value ${count}, type: ${typeof count}`);
console.log(`value ${size}, type: ${typeof size}`);

// number - speicla numeric values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = "hi ${helloBob}!"; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log("value: " + helloBob + ", type: " + typeof helloBob);

// boolen
// false: 0, null, nudefined, NaN, ''
// true: any ather value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symol, create unique identifiers for objects
const symbol1 = symbol("id");
const symbol2 = symbol("id");
console.log(symbol1 == symbol2); // false

const gsymbol1 = symbol.for("id");
const gsymbol2 = symbol.for("id");
console.log(gsymbol1 == gsymbol2); // true

// object, real-life object, data structure
const ellie = { name: "ellie", age: 20 };
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));
