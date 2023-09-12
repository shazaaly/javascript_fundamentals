function myFunction(a) {
    console.log(a + b);
}

const b = 79;
myFunction(10);

// const b declaration and initialization
// are not hoisted to the top of the scope,
//  but the function declaration is hoisted,
//  and the code will run without errors, logging 89 to the console.