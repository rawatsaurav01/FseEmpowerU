/*

The checkEligibility() function should accept age as input and check for eligibility to vote

The validity criteria for age is 18 and above.

The function should return true if eligibility criteria is satisfied else should retun false.

The function should return error message "Invalid Age Input, Age Should Only Be Number !!", 
for any non-numeric value passed to the function.

*/

const checkEligibility = (age) => {
    // Check if age is numeric
    if (isNaN(age)) {
      return "Invalid Age Input, Age Should Only Be Number !!";
    }
    
    // Check if age is 18 or above
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  };