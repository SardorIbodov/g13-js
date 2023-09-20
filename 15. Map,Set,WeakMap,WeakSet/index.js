//? Map vs Object
// let object = {
// 	name: "web",
// 	1: "salom"
// };
// let map = new Map();
// console.log(map);
// console.log(Number instanceof Object);
// console.log(Object.keys(object));
// object.name = "web";
// map.name = "web";
//? size
// console.log(object);
// console.log(map.size);
//! Map methods
//? set(key, value)
// let objKey = {name: "webbrain"}
// map.set(1, "web");
// map.set(true, 1);
// map.set(objKey, "haqiqat");
// console.log(map);
// let map = new Map([[true, "haqiqat"]]);
// map.set(true, "to'g'ri");
// console.log(map);
//? get(key)
// console.log(map.get(1));
// console.log(map.get(true));
// console.log(map.get(objKey));
//? delete(key)
// map.delete(true);
// console.log(map);
//? clear()
// map.clear();
// console.log(map);
//? has(key)
// console.log(map.has(objKey));
// console.log(map.has(12));

//? Map => Object
// let map = new Map([
//   ["name", "web"],
//   [{name: "some"}, "haqiqat"],
// ]);
// console.log(Object.fromEntries(map));

//? keys, values, entries
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

//! Iteration in map
//? for-of
// for(let key of map) {
// 	console.log(key);
// }
//? for-each
// map.forEach((value, key, map) => console.log(value, key, map));

//! Set
//? size
// let set = new Set();
// console.log(set.size);
// console.log(typeof set);
//? add(element)
// set.add("1");
// set.add("1");
// set.add(true);
// set.add({});
// console.log(set);
//? has(element)
// console.log(set.has(true));
// console.log(set.has("12"));
//? delete(element)
// set.delete("1");
// console.log(set);
//? clear()
// set.clear();
// console.log(set);
//? task
// let array = [1, 3, 5, 1, 6, 9, 6, 5];
//? Array => Set
// let set = new Set(array);
//? Set => Array
// console.log(Array.from(set));
//? Iteration
// let set = new Set([1, "2", true, null, undefined]);
//? for-of
// for(let item of set) {
// 	console.log(item);
// }
//? for-each
// set.forEach((v, i, s) => {
//   console.log(v, i, s);
// });
//? for-in
// for (let index in set) {
//   console.log(index);
// }

//! WeakMap
//? WeakMap methods: set, get, has, delete
// let weakMap = new WeakMap();
// let key1 = { name: "web" };
// let key2 = [1, 2];
// weakMap.set(key1, "obj");
// weakMap.set(key2, "arr");
// weakMap = 1;
// console.log(weakMap.get(key));
// weakMap.delete(key1);
// console.log(weakMap);

//! WeakSet
// let weakSet = new WeakSet();
// console.log(weakSet);
//? add()
// let vl1 = [1, 2];
// let vl2 = [1, 2];
// weakSet.add(vl1);
// weakSet.add(vl2);
// console.log(weakSet);
//? has()
// console.log(weakSet.has(vl));
//? delete()
// weakSet.delete(vl);
// console.log(weakSet);
//? iteration
// weakSet.forEach((v) => console.log(v));
// for (let item of weakSet) {
//   console.log(item);
// }
