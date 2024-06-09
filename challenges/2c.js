function stringTransformation(str) {
    const len = str.length;
    let result = '';
  
    if (len % 15 === 0) {
      result = str.split('').reverse().join('');
  
      result = result.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (len % 3 === 0) {
      result = str.split('').reverse().join('');
    } else if (len % 5 === 0) {
      result = str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
      result = str;
    }
  
    return result;
  }
  
  // Example usages:
  console.log(stringTransformation('Hamburger')); // Output: "regrubmaH"
  console.log(stringTransformation('Pizza')); // Output: "80 105 122 122 97"
  console.log(stringTransformation('Chocolate Chip Cookie')); // Output: "eikooCpihCetalocohC"