let x = 10; // Outer variable

function shadowExample() {
    let x = 20; // Inner variable with the same name

    console.log("Inner x:", x); // Accesses the inner x
}

shadowExample(); // Calls the function

console.log("Outer x:", x); // Accesses the outer x
