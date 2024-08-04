/*

The checkPhoneNumber() function should accept phoneNumber as input and check if it is valid.

The provided phoneNumber is a valid phoneNumber if its value matches with any of the pattern suggested below:


+1 0999999999, 
+1 099-999-9999, 
+1 (099)-999-9999, 
  +1 (099)9999999, 
  +1 099 999 9999, 
  +1 099 999-9999, 
  +1 (099) 999-9999, 
  +1 099.999.9999
  +10999999999, 
  +1099-999-9999, 
  +1(099)-999-9999, 
  +1(099)9999999, 
  +1099 999 9999, 
  +1099 999-9999, 
  +1(099) 999-9999, 
  +1099.999.9999
  
  The function should return true if validation criteria is satisfied else should return false.
  
  Use Regular Expression to perform validation check.

*/

function checkPhoneNumber(phoneNumber: string): boolean {
  const validPhonePatterns = [
    /^\+1[ ]?099\d{8}$/,
    /^\+1[ ]?099-\d{3}-\d{4}$/,
    /^\+1[ ]?\(099\)-\d{3}-\d{4}$/,
    /^\+1[ ]?\(099\)\d{7}$/,
    /^\+1[ ]?099[ ]?\d{3}[ ]?\d{4}$/,
    /^\+1[ ]?099[ ]?\d{3}-\d{4}$/,
    /^\+1[ ]?\(099\)[ ]?\d{3}-\d{4}$/,
    /^\+1[ ]?099\.\d{3}\.\d{4}$/,
    /^\+1099\d{8}$/,
    /^\+1099-\d{3}-\d{4}$/,
    /^\+1\(099\)-\d{3}-\d{4}$/,
    /^\+1\(099\)\d{7}$/,
    /^\+1099[ ]?\d{3}[ ]?\d{4}$/,
    /^\+1099[ ]?\d{3}-\d{4}$/,
    /^\+1\(099\)[ ]?\d{3}-\d{4}$/,
    /^\+1099\.\d{3}\.\d{4}$/,
  ];
  for (const pattern of validPhonePatterns) {
    if (pattern.test(phoneNumber)) {
      return true;
    }
  }
  return false;
}