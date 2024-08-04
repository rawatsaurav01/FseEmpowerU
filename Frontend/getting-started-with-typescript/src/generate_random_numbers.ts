/*

The generateRandomNumber() function should accept min and max as range boundary values.

The function should generate a random whole number in the given range and return it.

The function should return error message 'Incorrect Inputs. 1st value should be less than the second', 
if the min value is greater than or equal to max value.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type Number !!", 
for any non-numeric value passed to the function.

*/
function generateRandomNumber(min: number, max: number): number | string {
    // Check if the inputs are valid numbers
    if (typeof min !== 'number' || typeof max !== 'number') {
      return "Invalid Input Types, All Inputs Should Be of Type Number !!";
    }
  
    // Check if the min value is less than the max value
    if (min >= max) {
      return 'Incorrect Inputs. 1st value should be less than the second';
    }
  
    // Generate a random whole number in the given range
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
    // Return the random number
    return randomNumber;
  }