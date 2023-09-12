class Person{
	constructor(name){
		this.name = name

}
greet(){
	console.log(this.name);
}

}

class Employee extends Person{
	constructor(name, rank){
		super(name)
		this.rank = rank
	}
}

let employee = new Employee('John', 'Director');
console.log(employee);