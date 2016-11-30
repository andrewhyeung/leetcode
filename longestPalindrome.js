// algorithm checks if string is the same backwards and forwards
var name = 'raceeear'

function longestPalindrome(string){
	for(var i=0; i<string.length/2; i++){
		if(string[i] != string[string.length-1-i]){
			console.log('not a palindrome');  
			return
		}
	}
	console.log(string +' is definitely a palindrome')
}
longestPalindrome(name); 