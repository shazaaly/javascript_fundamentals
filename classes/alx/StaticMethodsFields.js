class Rectangle{
	ht = 0
	wth;
	constructor(ht, wth){
		this.ht = ht
		this.wth = wth
	}
}

const rec = new Rectangle(4, 6)
console.log(rec.wth, rec.ht);

class Square{
	#height = 0;
	#width;

constructor(height, width){
	this.#height = height;
	this.#width = width;
}
}

const sq = new Square(3,3)
/*console.log(sq.#height); /* not accessible*/