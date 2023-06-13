//Import
const readlineSync = require('readline-sync')

//functiona
const validador = (numeroEntrada,numeroGenerado) => {
    while(numeroEntrada != numeroGenerado){
        if(numeroEntrada>numeroGenerado){
            console.log("inserte un numero menor");
            numeroEntrada = readlineSync.question();
        }
        else{
            console.log("Inserte un numero mayor");
            numeroEntrada = readlineSync.question();
        }
    }
}
module.exports = (validador);