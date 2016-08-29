// replace in string function

String.prototype.rep = function(x, y){
	var string = this; 
	return string.split(x).join(y); 
}

var str = 'This is the best time of your life best'

var result = str.rep('best', 'worst'); 

console.log(result); 