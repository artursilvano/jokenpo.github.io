var r = ''
var sym = ['🗿','📜','✂️']
var resu = document.querySelector("p#res")
var pedra = document.querySelector("div#ped")
var papel = document.querySelector("div#pap")
var tesoura = document.querySelector("div#tes")
function jogar(escolha){
    let rand = Math.floor(Math.random() * 3 + 1)
    if (escolha==rand){
        r=`Empate`
    }else{
        if (escolha==1){
            if (rand==2){
                r='Perdeu'
            }else{
                r='Ganhou'
            }
        }else if (escolha==2){
            if (rand==3){
                r='Perdeu'
            }else{
                r='Ganhou'
            }
        }else if (escolha==3){
            if (rand==1){
                r='Perdeu'
            }else{
                r='Ganhou'
            }
        }
    }
    return resu.innerHTML=`${sym[escolha-1]} vs ${sym[rand-1]}\n${r}`
}
pedra.addEventListener('click', clickpe)
papel.addEventListener('click', clickpa)
tesoura.addEventListener('click', clickte)
function clickpe(){
    papel.style.backgroundColor=`white`
    tesoura.style.backgroundColor=`white`
    pedra.style.backgroundColor=`blue`
    jogar(1)
}
function clickpa(){
    pedra.style.backgroundColor=`white`
    tesoura.style.backgroundColor=`white`
    papel.style.backgroundColor=`red`
    jogar(2)
}
function clickte(){
    pedra.style.backgroundColor=`white`
    papel.style.backgroundColor=`white`
    tesoura.style.backgroundColor=`yellow`
    jogar(3)
}