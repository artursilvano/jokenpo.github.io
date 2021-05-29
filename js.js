var r = 0
var resultado = ["Ganhou","Perdeu","Empate"]
var sym = ['🗿','📜','✂️']
var resu = document.querySelector("div#res")
var pedra = document.querySelector("input#ped")
var papel = document.querySelector("input#pap")
var tesoura = document.querySelector("input#tes")
function jogar(escolha){
    let rand = Math.floor(Math.random() * 3)
    if (escolha==rand){
        r=2
    }else{
        if (escolha==0){
            if (rand==1){
                r=1
            }else{
                r=0
            }
        }else if (escolha==1){
            if (rand==2){
                r=1
            }else{
                r=0
            }
        }else if (escolha==2){
            if (rand==0){
                r=1
            }else{
                r=0
            }
        }
    }
    return resu.innerHTML=`${sym[escolha]} vs ${sym[rand]}</br>${resultado[r]}`
}