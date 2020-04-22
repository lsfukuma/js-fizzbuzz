//Scrivi un programma che stampi i numeri da 1 a 100, con le seguenti regole:

//    al posto dei multipli di 3 stampi "Fizz"
//    al posto dei multipli di 5 stampi "Buzz"
//    al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz"

//Scrivere un array contenenti i numeri da1 a 100
var array_numbers = [];

for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
    //al posto dei multipli di 3 stampi "Fizz"
        console.log('Fizz');
    } else if (i % 5 === 0) {
    //al posto dei multipli di 5 stampi "Buzz"
        console.log('Buzz');
    } else if (i % 3 == 0 && i % 5 == 0) {
    //al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz"
        console.log('FizzBuzz');
    } else {
    console.log(i);
    }
}
