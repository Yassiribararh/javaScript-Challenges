/**Intermediate Algorithm Scripting: Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined. */

function addTogether() {
    // creating a variable to store a function that checks whether the argiment is a number
    var checkArg = function(num) {
      if (typeof num === "number") {
        return num;
      } else {
        return undefined;
      }
    }
    
    // if the function holds 2 arguments
    if (arguments.length > 1) {
      // assign the two parameters 
      var par1 = checkArg(arguments[0]);
      var par2 = checkArg(arguments[1]);
      // checking if both are numbers
      if (checkArg(par1) === undefined || checkArg(par2) === undefined) {
        return undefined;
      } else {
        return par1 + par2;
      }
  
      // if the function holds only 1 arguments
    } else {
      // assigning the single arguments
      var single = arguments[0];
      
      if (checkArg(single)){
      // we then return a function that holds the second argument
      return function(double) {
        if (checkArg(single) === undefined || checkArg(double) === undefined) {
          return undefined;
        } else {
          return single + double;
          }
        };
      } 
    }
  }