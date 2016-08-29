function reverseVowels(string){
	var arr = string.split(''); 
	var front = 0; 
	var back = string.length - 1; 
	var vowels = ['a', 'e', 'i', 'o', 'u']; 
	// var vowels = 'aeiou'
	while(front < back){
		if((vowels.indexOf(string[front].toLowerCase()) != -1) === false){
			front += 1; 
		}
		else if((vowels.indexOf(string[back].toLowerCase()) != -1) === false){
			back -= 1; 
		}
		else{
			var temp = arr[front]; 
			arr[front]=arr[back]; 
			arr[back]=temp; 
			front += 1; 
			back -= 1; 
		}
	} 

	return arr.join('');
}

x = "leetcode";

console.log(reverseVowels(x));

// var vowels = 'aeiou'; 
// console.log(vowels.indexOf('k') != -1); 
// if((vowels.indexOf('k') != -1) === false){
// 			console.log('hello'); 
// }


// New es6 syntax not fully supported for function below: 
// function reverseVowels(string){
// 	var arr = string.split(''); 
// 	var front = 0; 
// 	var back = string.length - 1; 
// 	var vowels = ['a', 'e', 'i', 'o', 'u']; 
// 	while(front < back){
		
// 		if(vowels.includes(string[front]) === false){
// 			front += 1; 
// 		}
// 		else if(vowels.includes(string[back]) === false){
// 			back -= 1; 
// 		}
// 		else{
// 			var temp = arr[front]; 
// 			arr[front]=arr[back]; 
// 			arr[back]=temp; 
// 			front += 1; 
// 			back -= 1; 
// 		}
// 	} 
// 	return arr.join(); 
// }
// x = 'hello from the other side';

// console.log(reverseVowels(x));



