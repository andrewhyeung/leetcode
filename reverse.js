var name = 'andrew'
function reverseName(name){
	var reverse = ''
	for(var i = name.length -1; i>=0; i--){
		reverse += name[i]; 
	}
	return reverse
}

console.log(reverseName(name)); 
