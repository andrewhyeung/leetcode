var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++){
        for(var x = i + 1 ; x < nums.length; x++){
            if(nums[i] + nums[x] === target){
                return [i, x]
            }
        }
    }
};
arr = [1,3,5,7]
console.log(twoSum(arr, 10))