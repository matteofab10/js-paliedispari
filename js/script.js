const str = prompt('Inserisci una parola');

const isPalindrome = (inStr) => {
  for (let i=0; i < inStr.length; i++) {
    if (inStr[i] !== inStr[inStr.length - 1 - i]) {
      return 'is not palindrome';
    }
  }
  return 'is palindrome';
}

console.log(isPalindrome(str));