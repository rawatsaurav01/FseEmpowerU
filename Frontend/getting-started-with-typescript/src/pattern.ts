/*

The drawPattern() function should accept number of rows as input.

The function should return string that contains the pyramid structure for the number of rows inputted.

The pyramid structure should have the following pattern:

        *
       * *
      * * *
     * * * *
    * * * * *

The function should return error message "Invalid Input Type, Row Input Should Be of Type Number !!", 
if non-numeric value is passed to the function.

*/

function drawPattern(rows: number): string {
  if (typeof rows !== "number") {
    return "Invalid Input Type, Row Input Should Be of Type Number !!";
  }
  let pattern = "";
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows - i - 1; j++) {
      pattern += "  ";
    }
    for (let k = 0; k <= i; k++) {
      pattern += "* ";
    }
    pattern += "\n";
  }
  return pattern;
}

console.log(drawPattern(5));