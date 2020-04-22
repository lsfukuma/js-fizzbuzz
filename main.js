//Scrivi un programma che stampi i numeri da 1 a 100, con le seguenti regole:

//    al posto dei multipli di 3 stampi "Fizz"
//    al posto dei multipli di 5 stampi "Buzz"
//    al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz"

//Scrivere un array contenenti i numeri da1 a 100
var numbers = [];

for (var i = 1; i <= 100; i++) {
   numbers.push(i);
   //console.log(numbers);

   //estraggo i contenuti dell'array
   var numero = numbers[i];

   if (numero % 3 == 0) {
       //    al posto dei multipli di 3 stampi "Fizz"
       console.log('Fizz - multiplo di 3');
   } else if (numero % 5 == 0) {
       console.log('Buzz - multiplo di 5');
   }
}
