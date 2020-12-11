/*
--Intermediate Algorithm Scripting: Seek and Destroy(FreeCodeCamp Challenge):

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.

--Note
You have to use the arguments object. */

function destroyer(arr) {
    // convert arguments into array
    var args = Array.prototype.slice.call(arguments);
  
    // Loop to iterate through original array
    for (let i = 0; i < arr.length; i++) {
        // Nested Loop to iterate through new arguments array
      for (let j = 0; j < args.length; j++) {

        // If the value at the current index is equal in both arrays, we use delete to remove it from arr
        if (arr[i] == args[j]) {
          delete arr[i];
        }
     }
    }
    
    // after the deleting the array elements we are left with null values in the array. we used filter method to clear them out.
    var finalArray = arr.filter(function(empty) {
      return arr[empty] !== null;
    })
  
    return finalArray;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
  