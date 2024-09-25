console.log('in-class-4.js loaded!');

const ar = [1, 2, 3, 4, 5];

for (let i = 0; i < ar.length; i++) {
    if( (ar[i] == 1)|| (ar[i] == 3) || (ar[i] == 5) ) {
        const templateLiteral = `${ar[i]} is odd!`;
        console.log(templateLiteral);

      } else if ((ar[i] == 2)|| (ar[i] == 4)) {
        const templateLiteral = `${ar[i]} is even!`;
        console.log(templateLiteral);
      }
  }

/*Make an array with the elements 1,2,3,4,5. Create a for loop and in the code block: 
i. If the index is odd console log a string with the index number and if it is odd or even, an example: “1 is odd!”, “2 is even!”. Use If statements and 
template literals for this.
*/
