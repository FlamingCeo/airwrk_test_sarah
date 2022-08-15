/**Remove duplicate elements from sorted Array


Given a sorted array A[] of size N, delete all the duplicate elements from A[].

Note: Don't use set or HashMap to solve the problem.


Example 1:

Input:

N = 5

Array = {2, 2, 2, 2, 2}

Output: 2

Explanation: After removing all the duplicates

only one instance of 2 will remain.


Example 2:

Input:

N = 3

Array = {1, 2, 2}

Output: 1 2


Your Task:

You don't need to read input or print anything. Complete the function remove_duplicate() which takes the array A[] and its size N as input parameters and modifies it in place to delete all the duplicates. The function must return an integer X denoting the new modified size of the array.

Note: The generated output will print all the elements of the modified array from index 0 to X-1.
**/



remove_duplicate(arr){
  /**
      1.object to record the recorded number
      2. count the no of object and push to the object

  **/
  var obj = {}
  var length = arr.length;

  for(var i = 0; i<length;i++){
    var elementTocheck = arr[i];
    if(!obj[elementTocheck]){
      obj[elementTocheck] = 1;

    }
    else{
      obj[elementTocheck] = obj[elementTocheck]+1
    }
  }
  // var allKeys = Object.keys(obj);
  // var all
  var removeDuplicateArray = arr.filter(item => obj[item]<2);
  return removeDuplicateArray;
}
