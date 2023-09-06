//! String
//?
// let str1 = "";
// let str2 = '';
// let str3 = `Webbrain Academy`;

//?
// let str4 = new String("Webbrain Academy");
// console.log(str4, str3);
//? valueOf
// console.log(str4.valueOf());

//! Escape character
// let str = "\"Webbrain\"";
// console.log(str);
//? \n -> qator tashlaydi
// let str = "Salom\nDunyo";
// console.log(str);
//? \t -> tab
// let str = "Salom\tDunyo";
// console.log(str);

//! Accessing string
// let str = "Webbrain  Academy";
//? length
// console.log(str.length);
//? []
// console.log(str[0]);
// console.log(str[15]);
// console.log(str[18]);
// console.log(str[-5]);
// console.log(str[8],str[9],"a");
//? at()
// console.log(str.at(15));
// console.log(str.at(-5));
//? charAt()
// console.log(str.charAt(15));
// console.log(str.charAt(-5)); // ""

//?
// let fullName = "webbrain academy";
// let newValue = fullName.toUpperCase();
// console.log(newValue);
// let newNewValue = newValue.toLowerCase();
// console.log(newNewValue);
// let newValue = fullName.toLocaleUpperCase();
// console.log(newValue);

//! Mutable vs Immutable variable
// let str = "Webbrain Academy";
// str[0] = "w";
// console.log(str);

//? indexOf(string, index)
// let str = "Webbrain Academy";
// console.log(str.indexOf(" "));
// console.log(str.indexOf("r"));
// console.log(str.indexOf("brain"));
// console.log(str.indexOf("a"));
// console.log(str.indexOf("b", 3));
// console.log(str.indexOf("a", 9));

//? lastIndexOf(string)
// let str = "Webbrain Academy";
// console.log(str.lastIndexOf("a", 10));

//? includes()
// let str = "Webbrain Academy";
// console.log(str.includes("academy"));
// console.log("a" === "A");
// console.log("a" > "A");

//? charCodeAt()
// console.log("a".charCodeAt());
// console.log("A".charCodeAt());

//? startsWith, endsWith
// let str = "Webbrain Academy";
// console.log(str.startsWith("WebB"));
// str[0] === "W"
// console.log(str.endsWith("y"));
// str[str.length - 1] === "y"

//? padStart, padEnd
// let str = "Webbrain Academy";
// console.log(str.padStart(20, "ab"));
// console.log(str.padEnd(20, "ab"));

//? trimStart(), trimEnd(), trim()
// let str = "   Webbrain Academy          ";
// console.log(str.length);
// str = str.trimStart();
// console.log(str.length);
// str = str.trimEnd();
// console.log(str.length);
// str = str.trim();
// console.log(str.length);

//! slice(start, finish) => accepts "-"
// let str = "webbrain";
// let newStr = str.slice(3, 6);
// console.log(newStr);
// console.log(str);
// let newStr = str.slice(3, -2);
// console.log(newStr);
// let newStr = str.slice(-3, 2);
// console.log(newStr);

//! substring(start, finish)
//? manfiy = 0
//? finish yozilmasa => oxirigacha
// let str = "webbrain";
// let newStr = str.substring(3, 6);
// let newStr = str.substring(3);
// let newStr = str.substring(4);
// let newStr = str.substring(0);
// let newStr = str.substring(0, 5);
// let newStr = str.substring();
// let newStr = str.substring(-3, 2);
// console.log(newStr);
// console.log(newStr);
// console.log(str);

//! substr(start, count)
// let str = "webbrain";
// let newStr = str.substr(3, 4);
// console.log(newStr);

//! Stringlarni qo'shish
// let str1 = "salom";
// let str2 = "xayr";
// console.log(str1 + str2);
// console.log(str1.concat(str2, "123"));

//! replace
// let str = "webbrain";
// console.log(str.replace("b", "B"));

//! replaceAll
// let str = "webbbrain";
// console.log(str.replaceAll("b", "B"));

//! for-in, for-of
// let str = "webbrain";
// for(let index in str) {
// 	console.log(index, `=> ${str[index]}`);
// }
// for(let item of str) {
// 	console.log(`${str.indexOf(item)} =>` ,item);
// }

//! localeCompare()
// before => 1
// after => -1
// => 0
// let str1 = "webbrain";
// let str2 = "webbrain";
// console.log(str1.localeCompare(str2));

