/*
function soma(n1, n2){
    return n1+n2
}


console.log(soma(9, 3)) //caso eu coloque so um numero ele dará erro ai entra o segundo codigo
*/

function soma(n1=0, n2=0){ //estabelece um numero para cada, caso o meu comando nao tiver o segundo numero para soma ele vai somar com o numero estabelido para cada N.
    return n1 + n2
}

console.log(soma(7))