//Crie um programa que leia um número do teclado até que encontre um número igual a zero. No final, mostre a soma dos números digitados.(DO...WHILE)

var i = 1
var soma = 0
 while(i != 0) {
    var i = Number(prompt(" digite um numero: "))
     var soma = soma + i
 }
 alert(`o resultado da soma é ${soma}`)