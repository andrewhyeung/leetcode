// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

var firstUniqChar = function(s){
    for(var i = 0; i < s.length; i++){ 
        if(s.indexOf(s[i]) == i && s.indexOf(s[i], i + 1) == -1){
            return i; 
        }
    }
    return -1;
}


var word1 = 'ss'; 
var word2 = 'leetcode'; 
console.log(firstUniqChar(word1)); 

