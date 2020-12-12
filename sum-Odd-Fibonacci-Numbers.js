/* Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

 */

function sumFibs(num) {
    // Declaring the final sum
    let sum = 0;
    // the start number to add
    var start = 0;

    // the following number
    var next = 1;

    // the current number
    var current;
    

    // iterating through numbers as long it is less than the argument num
    for (let i = 0; i < num; i++) {
        // setting current equal to start number and following number
      current = start + next;
      // updating the start number and moving its position to next
      start = next;

      // moving next to current
      next = current;
      
      // if the number is off and less than num
      if (current % 2 !== 0 && current <= num) {
        // add the value of current to the sum
        sum += current;
      }
    }

    // return sum + 1 as the print out of the sequence earlier omitted the other 1 at the start of the sequence.
    return sum + 1;
  }
  
  sumFibs(4);
  console.log(sumFibs(1000));