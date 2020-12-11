/* Intermediate Algorithm Scripting: Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

*/


function myReplace(str, before, after) {

    // index is the index of the word in the before argument in the string
    let index = str.indexOf(before);
  
    // if the value of the string at index "index" equals to the value of the string at index in uppercase letter
  if(str[index] === str[index].toUpperCase()) {
      // assign the after word with capital letter at the starting character
    var newString = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    var newString = after.charAt(0).toLowerCase() + after.slice(1);
  }
    
  // return the string after replacing the words
    return str.replace(before, newString);
  }
  
  // Testing
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));