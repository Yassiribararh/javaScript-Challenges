/*Intermediate Algorithm Scripting: Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples. */


function uniteUnique(arr) {
    // creating an array to stor the final value
    var finalArr = [];
  
    // looping through the arguments object
    for (let i = 0; i< arguments.length; i++) {
      var argumentsArray = arguments[i];
      
      //Looping through the array at index of argument
      for (let j = 0; j < argumentsArray.length; j++) {
        var valueAtIndex = argumentsArray[j];
  

        //if the value doesnt exist we add it into our final array
        if (finalArr.indexOf(valueAtIndex) < 0) {
          finalArr.push(valueAtIndex);
        }
      }
    }

     //return our array
     return finalArr;
  }
  

  //testing
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);