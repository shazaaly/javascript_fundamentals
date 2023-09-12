class Person{
	constructor(name){
		this.name = name

}
greet(){
	console.log(this.name);
}

}

const person1 = new Person('shaza')
console.log(person1.greet());
