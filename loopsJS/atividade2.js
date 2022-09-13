var pares = 0,
    impares = 0;

for(let i = 1; i <= 10; i++){

    let num = Number(prompt("Digite um número: "))

    if( num % 2 == 0){
        pares++
    }else{
        impares++
    }
}
alert( `Números pares: ${pares}\n`)
   alert(` Números ímpares: ${impares}`)