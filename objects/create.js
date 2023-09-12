// object literals
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};


function Human(first, last, age){
	this.first = first;
	this.last = last;
	this.age = age;

}
let human1 = new Human('John', 'Doe', 55)
console.log(human1);

class Student{
	constructor(first, last){
		this.first = first
		this.last = last
	}
	fullname(){
		return this.first + " " + this.last
	}

}

let student1 = new Student('John', 'Doe')
console.log(student1.fullname());

const employee = {
	firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {return('Hello Mr. ' + this.firstName)} //Hello Mr. John

}
const emp1 = Object.create(employee)
let greet = emp1.fullName()
console.log(greet);