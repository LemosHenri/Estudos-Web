/*
    CODIGO IMPLEMENTADO PARA CALCULAR O ÍNDICE IMC DE UMA PESSOA
    CALCULO: PESO / ALTURA^2 

    O RESULTADO DO IMC INDICA OS SEGUINTES FATORES:
        IMC < 17 -> MUITO ABAIXO DO PESO
        17 < IMC < 18,5 -> ABAIXO DO PESO
        18,5 < IMC < 25 -> PESO NORMAL
        25 < IMC < 30 -> ACIMA DO PESO
        30 < IMC < 35 -> OBESIDADE GRAU I
        35 < IMC < 40 -> OBESIDADE GRAU II
        IMC > 40 -> OBESIDADE GRAU III
*/

function calcula_IMC(peso, altura){

    return peso / Math.pow(altura, 2);
}

let peso = 100;
let altura = 1.72;

imc = calcula_IMC(peso, altura);

console.log('Peso: ' + String(peso));
console.log('Altura: ' + String(altura));
console.log('IMC: ' + String(imc));
console.log('\nSTATUS: ');


if (imc <= 17) {
    
    console.log('Muito abaixo do peso.');

} else if (imc <= 18.5) {

    console.log('Abaixo do peso.');

} else if (imc <= 25){

    console.log('Peso normal');

} else if (imc <= 30){

    console.log('Acima do peso');

} else if (imc <= 35){

    console.log('Obesidade grau I');

} else if (imc <= 40){

    console.log('Obesidade grau II');

} else {

    console.log('Obesidade grau III');

}