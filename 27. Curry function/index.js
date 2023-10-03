// getSum(1)(2)(3)(4);

// const getSum = (first) => {
//   return (second) => {
//     return (third) => {
//       return (fourth) => {
//         console.log(first + second + third + fourth);
//       };
//     };
//   };
// };
// getSum(1)(2)(3)(4)....;

// const getSum = (first) => {
// 	return (second) => {
// 		if(second) return getSum(first + second);
// 		else return first;
// 	}
// }
// console.log(getSum(1)(2)(3)(4)(5)())