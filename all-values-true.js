/**Intermediate Algorithm Scripting: Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation. */

function truthCheck(collection, pre) {

    // Create a counter to check how many are true.
    var counter = 0;
    
    // iterating through array elements(Objects)
    for (let i = 0; i < collection.length; i++) {
      // if the array at index has the pre property and the boolean condition of pre is true
      if (collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])) {
        // we increment the counter
        counter++;
      }
  
    }
    // if the counter equals the length of the collection that means all the elements are truthy otherwise return false
    return counter == collection.length
    
  }
  
  // Testing
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
  
  
  console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"))