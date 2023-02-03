var agora = new Date()
var diasem = agora.getDay()


diasem = 6 //só colocaria diasem aqui se eu nao quisesse pegar o dia atual automaticamente com o codigo acima.
/*
  O java script pega a semana dessa forma:
  0 = Domingo
  1 = Segunda-Feira
  2 = Terça-Feira
  3 = Quarta-Feira
  4 = Quinta_Feira
  5 = Sexta-Feira
  6 = Sabado
*/   

switch(diasem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda - Feira')
        break
    case 2:
        console.log('Terça - Feira')
        break
    case 3:
        console.log('Quarta -Feira')
        break
    case 4:
        console.log('Quinta - Feira')
        break
    case 5:
        console.log('Sexta - Feira')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] Dia Invalido')
}