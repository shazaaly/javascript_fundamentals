function counter() {
	var count = 0;

	function inner() {
	  count++;
	  return count;
	}

	return inner;
  }

 var counter_function = counter();

 console.log(counter_function());  //1
 console.log(counter_function());  //2
 console.log(counter_function());  //3
 console.log(counter_function()); //4