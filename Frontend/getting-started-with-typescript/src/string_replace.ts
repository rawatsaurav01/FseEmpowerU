/*

The replaceString() function should accept 3 string inputs.

The function should search for second string in first string and if found should replace it with third string.

The function should return the replaced string.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type String !!", 
for any non-numeric value passed to the function.

*/
const replaceString = (
    str: string,
    toReplace: string,
    replaceWith: string
  ): string => {
    // Check if all inputs are strings.
    if (typeof str !== "string" || typeof toReplace !== "string" || typeof replaceWith !== "string") {
      throw new Error("Invalid Input Types, All Inputs Should Be of Type String !!");
    }
  
    // Use the replace() method to replace all occurrences of the second string with the third string.
    return str.replace(toReplace, replaceWith);
  };