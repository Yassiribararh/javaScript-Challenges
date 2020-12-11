// Converting a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
    //replacing Capital letters after lower letter and adding a space between them
    let test = str.replace(/([a-z])([A-Z])/g, '$1 $2');

    // declaring new regex that includes underscored and spaces
    let regex = /[_\s]/;

    //taking the string words into an array and spliting them using the regex declared before
    let arr = test.split(regex);

    // Joining the array by a '-' and all to lower case
    let finalArr = arr.join("-").toLowerCase();

    // Return final Array
    return finalArr;
  }

//test
console.log(spinalCase('TheAndyGriffith_Show'))