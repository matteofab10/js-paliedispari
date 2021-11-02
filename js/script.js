// esercizio palindromo


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


// esercizio pari e dispari

const pariDispari = prompt('inserisci pari o dispari');
const numeroUtente = prompt('inserisci un numero da 1 a 9');
const numeroPc = getRandomInt(1,9);
console.log(numeroPc);
const somma = numeroPc + numeroUtente
console.log(somma);
const risultato = checkPariDispari(somma)
console.log(risultato);

if (risultato === pariDispari){
  console.log('ha vinto il giocatore');
} else {
  console.log('ha vinto il pc');
}


function checkPariDispari(numero){
  if(numero % 2) {
    return 'dispari';
}
    return 'pari';
}




function getRandomInt(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}