/*

The calculateNetPayable() function should accept 3 inputs:
pricePerKilo, quantityInKilo and discountPercentage.

Calculate the net amount post discount that would be payable.

The function should return the computed value.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type Number !!", 
for any non-numeric value passed to the function.

*/

function calculateNetPayable(pricePerKilo, quantityInKilo, discountPercentage) {
    // Check if all inputs are of type number
    if (typeof pricePerKilo !== 'number' || typeof quantityInKilo !== 'number' || typeof discountPercentage !== 'number') {
      throw new Error('Invalid Input Types, All Inputs Should Be of Type Number !!');
    }
    // Calculate the discount amount
    const discountAmount = (pricePerKilo * quantityInKilo) * (discountPercentage / 100);
    // Calculate the net amount payable
    const netPayable = (pricePerKilo * quantityInKilo) - discountAmount;
    return netPayable;
  }