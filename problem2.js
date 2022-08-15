/**Given two strings S1 and S2 as input, the task is to merge them alternatively i.e. the first character of S1 then the first character of S2 and so on till the strings end.

NOTE: Add the whole string if the other string is empty.

Example 1:

Input:

S1 = "Hello" S2 = "Bye"

Output: HBeylelo

Explanation: The characters of both the

given strings are arranged alternatlively.


â€‹Example 2:

Input:

S1 = "abc", S2 = "def"

Output: adbecf

Explanation: The characters of both the

given strings are arranged alternatlively.



Your Task:

You don't need to read input or print anything. Your task is to complete the function merge() which takes the strings S1 and S2 as input and returns the resultant string by merging both S1 and S2 alternatively starting from S1.


**/

function merge(s1,s2){
  /**
    1. turn both to array
    2. take the largest array length for each
    3. index turn to take the element from both array until it reach the end

  **/
var firstString = s1.split("");
var secondString = s2.split("");
var lengthOfFirstString = firstString.length;
var lengthOfSecondString = secondString.length;
var defaultArrayForLoop = [];
var finalString = "";
var lengthtoLoop = lengthOfFirstString;
if(lengthOfSecondString>lengthOfFirstString){
lengthtoLoop = lengthOfFirstString
}

for (var i = 0; i < lengthtoLoop; i++) {
  var firstElementOfArray ="";
  var secondElementOfArray ="";
  if(i<=lengthOfFirstString){
     firstElementOfArray = firstString[i];
  }
  if(i<=lengthOfFirstString){
     secondElementOfArray = secondString[i];
  }
  defaultArrayForLoop.push(firstElementOfArray)
  defaultArrayForLoop.push(secondElementOfArray)
}

var finalArrayWithoutEmpty = defaultArrayForLoop.filter(item => item!="");
finalString = finalArrayWithoutEmpty.join("");

return finalString;
}
