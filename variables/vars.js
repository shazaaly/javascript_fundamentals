/* The variable i is indeed not explicitly
declared with var, let, or const, which means
 it becomes a global variable by default in JavaScript.
 Because it's a global variable, it's accessible outside the for
 s*/
// for (i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log("after loop i = ", i);

/*IIFE*/
"use strict ";

var x = 99999;
(function () {
  for (let x = 0; x < 10; x++) {
    console.log(x);
  }
})();
console.log("after loop x : ", x);
