let num = [6, 5, 3 ,3 ,5]

//console.log(`nosso vetor é o ${num}`) - Assim acrescenta só o numero.
//console.log(num) - Assim acrescenta os colchetes tambem

num.sort() // organiza os valores em ordem crescente.
num.push(1)// abixo do sort coloca os valor em ordem e depois acrescenta o numeral 1 - e acima do sort acrecenta o numeral 1 e depois coloca em ordem.
console.log(num) // so para mostra os valores na tela
console.log(`O vetor tem ${num.length} Posições` ) //mostar o comprimento do vetor
console.log(num[0]) //declara qual cheve em formato de numero que esta dentro do [] eu quero ver
console.log(`O primeiro valor é ${num[0]}`) //o mesmo resultado de cima mais escrito de outra forma usando craze.
let pos = num.indexOf(6) //num.indeOf é usado para expecificar a chave da posicao do mundo que eu quero especificado entre().
if(pos == -1){
    console.log('O valor nao foi encontrado')
} else {
    console.log(`O valor 6 esta na posição ${pos}`)
}