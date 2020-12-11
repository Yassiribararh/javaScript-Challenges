/* Intermediate Algorithm Scripting: Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase. */
function translatePigLatin(str) {
    // declaring a regular expression for words that start with vowels
    let vowelReg = /^[aeiou]+/gi;
    
    // if the characters at the start are vowels
    if (vowelReg.test(str) == true) {
      
        // we add 'way' at the end of the string
      return str.concat("way");
  
    } else {
    // otherwise we change the location of the consonants to the end and we add 'ay'
      return str.replace(/^([bcdfghjklmnpqrstvwxs]+)([aeiou])(\w*)/, '$2$3$1').concat("ay");
  
    }
  
  }
  
  // Testing
  console.log(translatePigLatin("eight"));
  console.log(translatePigLatin("california"));