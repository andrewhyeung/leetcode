// sort the list in ascending order, swapping two at a time.

function bubbleSort(arr){
	for(var x = 0; x<arr.length; x++){
		for(var i = 1; i < arr.length; i++){
			if(arr[i-1] > arr[i]){
				var temp = arr[i]; 
				arr[i] = arr[i-1]; 
				arr[i-1] =temp; 
			}
		}	
	}
	
	return arr; 
}

//extre
var list = [3,2,9,6,5]; 
var list2 = [6,5,4,3,2,1]
console.log(bubbleSort(list2))
