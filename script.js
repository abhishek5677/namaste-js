// Hosting in js

// console.log(x)
// getName()
// // console.log(getName);

// var x = 7;
// console.log(x)

// function getName() {
//     var name = 'yasin'
//     console.log('hello abhishek');
//     console.log(name);

//     // function name(){
//     //     console.log('yasin');
//     // }
//     // name()
// }

// const getName = () => {
//     return console.log('hello abhishek')
// }

// how functions work in js

// var x = 1;
// a();
// b();

// console.log(x)

// function a() {
//     var x = 10;
//     console.log(x);
// }

// function b() {
//     var x = 100;
//     console.log(x);
// }

// let and const and temporal dead zone

// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// console.log(b); // prints undefined as expected
// let a = 10;
// console.log(a); // 10
// var b = 15;
// console.log(window.a); // undefined
// console.log(window.b); // 15

// Block scope and shadowing

// let b = 100;
// function x() {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// x()

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }
// console.log(b);
// console.log(b);
// console.log(c);

// let b = 20;
// function x() {
//     var b = 10;
//     console.log(b);

// }
// console.log(b);
// x()

// closures in js

// function x() {
//     var a = 10;
//     function name() {
//         console.log('abhishek');
//     }
//     function y() {
//         console.log(a)
//         name()
//     }
//     return y
// }

// var z = x()
// z()

// function outerFunction() {
//     let outerVariable = "I am a variable";

//     function outerHelperFunction() {
//          return "I am a helper function";
//     }

//     return function innerFunction() {
//         console.log(outerVariable); // Accessing the outer variable
//         console.log(outerHelperFunction()); // Accessing and invoking the outer function
//     };
// }

// const closureFunc = outerFunction();
// closureFunc();

// Output:
// I am a variable
// I am a helper function

// function x() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Namaste Javascript");
// }
// x();

// callback function in js

// setTimeout(function () {
//     console.log("timer")
// }, 3000)

// function x(y) {
//     console.log("x");
//     y()
// }

// x(function () {
//     console.log('y');
//     var a = 10
// })

// function attachEvent() {
//     let count = 0;
//     document.getElementById('clickMe')
//         .addEventListener("click", function xyz() {
//             console.log("button clicked", ++count);
//         })
// }

// attachEvent();

// map function
// const arr = [1, 2, 3, 4, 5];

// const output = arr.map((ele) => ele * 2);

// console.log(output); // Output: [2, 4, 6, 8, 10]

// filter function
// const arr = [1, 2, 3, 4, 5];

// const isOdd = (ele) => {
//   return ele % 2 === 1;
// };

// const isEven = (ele) => {
//   return ele % 2 === 0;
// };

// const output1 = arr.filter(isOdd);
// const output2 = arr.filter(isEven);

// console.log(output1); // Output: [1, 3, 5]
// console.log(output2); // Output: [2, 4]

// reduce function
// const arr = [1, 2, 3, 4, 5];

// find sum

// using traditional way to calculate sum
// const findSum = (arr) => {
//   let sum = 0;
//   for(let i=0; i<arr.length; i++){
//     sum += arr[i]
//   }
//   return sum;
// };
// console.log(findSum(arr)); // Output: 15


// using reduce function to calculate sum

// const output = arr.reduce((acc, curr) => {
//   return (acc += curr);
// }, 0);

// console.log(output); // Output: 15
