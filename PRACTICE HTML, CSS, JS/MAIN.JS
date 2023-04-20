var validateEmail = function (address) {
  // Check if the address is a string
  if (typeof address !== 'string') {
    return false; // Return false if the address is not a string
  }

  
  // The regular expression checks for one or more characters that are not '@' or whitespace,
  // followed by '@', followed by one or more characters that are not '@' or whitespace,
  // followed by '.', followed by one or more characters that are not '@' or whitespace
  var pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!pattern.test(address)) {
    return false; // Return false if the address does not match the regular expression
  }

  // Check if the address has consecutive dots or starts/ends with a dot
  // The regular expression checks for two or more consecutive dots or a dot at the beginning or end of the address
  var dotPattern = /[.]{2,}|^\.|\.$/;
  if (dotPattern.test(address)) {
    return false; // Return false if the address contains consecutive dots or starts/ends with a dot
  }

  // Check if the address has an IP address instead of a domain name
  // The regular expression checks for an address that consists of four sets of one to three digits, separated by dots
  var ipPattern = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
  if (ipPattern.test(address)) {
    return true; // Return true if the address is an IP address
  }

  // Check if the domain name has at least one dot
  // The regular expression checks for one or more non-@, non-whitespace characters, followed by '@', followed by one or more non-@, non-whitespace characters,
  // followed by '.', followed by two or more word characters (letters, digits, or underscore)
  var domainPattern = /^[^@\s]+@[^@\s]+\.\w{2,}$/;
  if (!domainPattern.test(address)) {
    return false; // Return false if the domain name does not match the regular expression
  }

  // Check if the domain name has only ASCII characters
  // The regular expression checks for zero or more ASCII characters in the domain name
  var asciiPattern = /^[\x00-\x7F]*$/;
  var domain = address.split('@')[1]; // Extract the domain name from the address
  if (!asciiPattern.test(domain)) {
    return false; // Return false if the domain name contains non-ASCII characters
  }

  // All tests passed, return true
  return true; // Return true if the address passes all tests
};


var validateEmail = function (address) {

 const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!pattern.test(address)) {
    return false;
  }

 
  const dotPattern = /[.]{2,}|^\.|\.$/;
  if (dotPattern.test(address)) {
    return false; 
  }

  const domainPattern = /^[^@\s]+@[^@\s]+\.\w{2,}$/;
  if (!domainPattern.test(address)) {
    return false;
  }


  const asciiPattern = /^[\x00-\x7F]*$/;
  const domain = address.split('@')[1]; 
  if (!asciiPattern.test(domain)) {
    return false; 
  }

  return true; 
};

