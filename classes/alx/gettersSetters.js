class Rectangle {
	constructor(height, width) {
	  this.height = height;
	  this.width = width;
	}
// getter
	get area(){
		return this.calcArea()

	}

	calcArea(){
		return this.width * this.height

	}
}

const square = new Rectangle(10,10)
console.log(square.area);