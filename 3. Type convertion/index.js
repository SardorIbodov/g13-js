//! String => Number
//! +, Number, parseInt, parseFloat
//? +
// 1
// let a = "12";
// console.log(typeof +a);
// 2
// let a = "1a1";
// console.log(+a);
// 3
// let a = "1.2";
// console.log(+a);
//! NaN => Not a number

//? Number()
// 1
// let a = "12";
// let number = Number(a);
// console.log(typeof number);
// 2
// let a = "1a1";
// console.log(Number(a));
// 3
// let a = "1.2";
// console.log(Number(a));

//? parseInt()
// 1
// let a = "12";
// console.log(parseInt(a));
// 2
// let a = "1.9999";
// console.log(parseInt(a));
// 3
// let a = "12.3a1";
// console.log(parseInt(a));

//? parseFloat
// 1
// let a = "12";
// console.log(parseFloat(a));
// 2
// let a = "1.9999";
// console.log(parseFloat(a));
// 3
// let a = "12.3a1";
// console.log(parseFloat(a));

//! task
// console.log(+"2" + +"3");
//? 1) "2" => 2
//? 2) "3" => 3
//? 3) 2 + 3
// console.log(Number("1.3") + parseInt("4.5") + parseFloat("5"));
// 1.3 + 4 + 5 => 10.3

//! Number => String
//? String()
// let a = 12;
// console.log(String(a));
//? ``
// let a = 12;
// console.log(`${a}`);

//? string + number => string
//? number + string => string
//? number - string => number
//? number * string => number
//? number / string => number
//? string / string => number
//? string * string => number
//? string - string => number
//? string + string => string
// console.log(2 + "2"); // 22
// console.log(2 - "1"); // 1
// console.log(2 / "4"); // 0.5
// console.log(2 * "3"); // 6
// console.log("2" * 3); // 6
// console.log("2" - 1); // 1

//! ... => Boolean
//! false => "", '', ``, 0, null, undefined, NaN => falsy qiymatlar
//! true, 
//? 
// let title = "";
// console.log(Boolean(title));
// console.log(Boolean(""));
// console.log(Boolean(" "));
// console.log(Boolean("12"));
// console.log(Boolean("sa"));
// console.log(Boolean(title));
//? 
// console.log(Boolean(0)); 
// console.log(Boolean(1)); 
// console.log(Boolean(-1)); 
// console.log(Boolean(-1.45)); 
// console.log(Boolean(1.45)); 
//? 
// console.log(Boolean(null));
// console.log(Boolean(undefined));
//? 
// console.log(Boolean({}));
// console.log(Boolean([]));
//? 
// console.log(Boolean(NaN));

//! Boolean => ...
// let a = true;
// let b = false;
// console.log(String(a));
// console.log(Number(a));
// console.log(Number(b));

//! Operators
//? +, -, /, *, %, **, ++, --, =, ==, ===
// console.log(5 % 2); // 1
// console.log(5 % 5); // 0
// console.log(2 ** 5); // 32
// console.log(3 ** 3); // 27

//! increment => ++
//? postfix
// let a = 2;
// console.log(a++); // 2
// console.log(a); // 3
//? prefix
// let b = 3;
// console.log(++b); // 4
// console.log(b); // 4

//! decrement => --
//? postfix
// let a = 2;
// console.log(a--); // 2
// console.log(a); // 1
//? prefix
// let b = 3;
// console.log(--b); // 2
// console.log(b); // 2

//! =
// let a = 12;
// console.log(a);
 
//! == => noqat'iy
//? faqat qiymatga qarab
// console.log(2 == "2");
// console.log(1.2 == "1.2");
// console.log(null == undefined); // true 
// console.log(0 == false); // true 
// console.log([1] == [1]); // link => reference
// console.log("" == 0); 
// console.log(0 == null); // f
// console.log(typeof null);
// console.log(0 <= null); // t
// console.log(0 >= null); // t
// console.log(0 > null); // f
// console.log(0 < null); // f

//! ===  => qat'iy
//? qiymat va data-type
// console.log(2 === "2");
// console.log(2 === 2);
// console.log(null === undefined); 
// console.log(0 === false); 
// console.log([1] === [1]);

//? +=, -=, *=, /= => abbriviations
// let a = 2;
// a = a + 5;
// a += 5;
// console.log(a);

//! Comparisions
// console.log(2 > 2); // f
// console.log(2 > 1); // t
// console.log(2 < 1); // f
// console.log(2 <= 1); // f
// console.log(2 >= 1); // t

//! Mantiqiy operatorlar
//? ! => inkor 
// console.log(!true); // => !Boolean(true)
// console.log(!0); // => Boolean(0) => !false => t 
// console.log(!"salom"); // => Boolean("salom") => !t => f
//? || => yoki, (or), mantiqiy qo'shish
// console.log(true || false); // true (1 + 0) => 1 => t
// console.log(false || true); // true (0 + 1) => 1 => 1
// console.log(false || false); // false (0 + 0) => 0 => f
// console.log(true || true); // t (1 + 1) => 1 => t
// console.log(false || null || "" || null || false || undefined);

//? && => va, (and), mantiqiy ko'paytirish
// console.log(true && false); // (1 * 0) => 0 => f
// console.log(false && true); // (0 * 1) => 0 => f
// console.log(false && false); // (0 * 0) => 0 => f
// console.log(true && true); // (1 * 1) => 1 => t

// console.log("webbrain" && true); // true
// console.log("webbrain" && true && null && 4); // null

//! mixed
// console.log((4 || "webbrain") && null || undefined);
