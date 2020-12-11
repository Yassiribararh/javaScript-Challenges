/*Intermediate Algorithm Scripting: Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */

function fearNotLetter(str) {
    
      // Iterating through the str at each characte index
      for (let i = 0; i < str.length; i++) {

        // assignin the ASCII code to each character
        var code = str.charCodeAt(i);
        
        // if that code is not equal to the first character code plus the index
        if (code !== str.charCodeAt(0) + i) {

          // return the letter that is missing by converting the code in to a character
          return String.fromCharCode(code - 1)
        }
        
      }
      
      // After iteration is complete and nothing was done. return indefined
      return undefined;
      
    }
    
    //Testing
    console.log(fearNotLetter("abce"));