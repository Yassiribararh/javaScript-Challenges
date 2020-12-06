// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// function that adds a book name to a new Array that is a coppy of our bookList array
function add (list, bookName) {
  let newArr = [...list];
  newArr.push(bookName);
  return newArr;
  
}

// function that removes the book name from it's index
function remove (list, bookName) {
  let newArr = [...list];
  var book_index = newArr.indexOf(bookName);
  if (book_index >= 0) {

    newArr.splice(book_index, 1);
    return newArr;
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
