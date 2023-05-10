function sum(a, b) {
  return a + b;
}

function capitalize(str) {
  if (str === '') {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

const calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  subtract: function (num1, num2) {
    return num1 - num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },
  divide: function (num1, num2) {
    if (num2 === 0) {
      return NaN;
    }
    return num1 / num2;
  }
};

function caesarCipher(str, shift) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const shiftedAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);
  const upperCaseAlphabet = alphabet.toUpperCase();
  const shiftedUpperCaseAlphabet = shiftedAlphabet.toUpperCase();

  return str
    .split('')
    .map(char => {
      if (alphabet.includes(char)) {
        return shiftedAlphabet[alphabet.indexOf(char)];
      } else if (upperCaseAlphabet.includes(char)) {
        return shiftedUpperCaseAlphabet[upperCaseAlphabet.indexOf(char)];
      } else {
        return char;
      }
    })
    .join('');
}







module.exports = {
  sum,
  capitalize,
  reverseString,
  calculator,
  caesarCipher
};

