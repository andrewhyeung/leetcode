// given array of ints where every element apppears twice except for one. return single number
// do in linear runtime complexity and without extra memory

function singleNumber(num){
	if(num.length === 1){
		return num[0]
	}	
	var result = 0;
	for(var i = 0; i<num.length; i++){
		 result = result ^ num[i];
	}
	return result
}

var algoNums = [2,10,2,5,6,5,6];
var algoNums2 = [-1,-1,-2];

console.log(singleNumber(algoNums));



