//import
const chance = require('chance');
const aleatorio = chance();
const readlineSync = require('readline-sync');
const validador = require('./validador')

//Random number generate
const numeroAleatorio = aleatorio.natural({min:1 , max: 100});

//Input
let entrada = readlineSync.question("Inserte un numero entre 1 y 100: ");

//function
validador(entrada,numeroAleatorio);

//you win
console.log("Correcto, el numero era " + numeroAleatorio);



