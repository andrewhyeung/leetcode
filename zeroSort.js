// sort all zeros in array to the right while maintaining order of elements. Perform in O(n)

function zeroSort( arr ) {
	for(var i = arr.length - 1; i >= 0; i--){
		if(arr[i] === 0){
			arr.splice(i, 1)
			arr.push(0);
		}
	}
	return arr;
}

var array1 = [2,0,3,1,0,4]; 
var array2 = [0,0,1];
console.log(zeroSort(array2));