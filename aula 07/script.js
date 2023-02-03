function Gerar(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('Por favor digite um numero!')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = '' //isso é para zerar a tabuada sempre que adicionado um  novo numero se nao vai acrescentar uma tabuada embaixo da outra
        while (c <= 10){
            var item = document.createElement('option')// isso é para os numero ficarem em baixo um do outro na tabela da tabuada
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item) //Aqui é criado um elemento filho
            c++ //isso é para pegar o valor que foi digitado e sempre acrescentar mais um 

        }
    }
}