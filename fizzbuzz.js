let f = "Fizz";
let b = "Buzz";
let t = "FizzBuzz"

for (i = 0; i < 101; i++){
	if(i % 3 === 0){
		console.log(f);
        }if(i % 5 === 0){
		console.log(b);
	}else if(i % 3 === 0 && i % 5 ===0){
		console.log(t);
	}else{
    	        console.log(i);
	};
};


