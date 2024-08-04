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

module.exports = function drawPattern(rows) {
    if (typeof rows !== 'number') {
        return "Invalid Input Type, Row Input Should Be of Type Number !!";
    } else {
        let _pattern = "";
        let j;
        for (let i = 1; i <= rows; i++) {
            for (let j = 1; j <= rows - i; j++) {
                _pattern += " ";
            }
            for (let k = 1; k <= i; k++) {
                _pattern += "* ";
            }
            _pattern += "\n";
        }
        return _pattern;
    }
}