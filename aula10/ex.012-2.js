var agora = new Date()
var hora = agora.getHours()
console.log(`Agora sao exatamente ${hora} Horas`)
if (hora < 5){
    console.log('Bom Madrugada!')
} else if (hora < 12){
    console.log('Boa dia!')
} else if (hora < 18){
    console.log('Boa Tarde!')
} else if (hora < 24){ 
    console.log('Boa Noite!')
}
