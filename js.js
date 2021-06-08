if (!localStorage.getItem('up') && !localStorage.getItem('lp')) {
    localStorage.setItem('up', 0)
    localStorage.setItem('lp', 0)
}
let r = null
const resultado = ["Ganhou","Perdeu","Empate"]
const sym = ['🗿','📜','✂️']
const sec2 = document.querySelector("#res")
const resu = document.querySelector("#divres")
const pedra = document.querySelector("#ped")
const papel = document.querySelector("#pap")
const tesoura = document.querySelector("#tes")
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#user').innerHTML=localStorage.getItem('up')
    document.querySelector('#local').innerHTML=localStorage.getItem('lp')
})
function jogar(escolha){
    document.querySelector('#ped').disabled = true
    document.querySelector('#pap').disabled = true
    document.querySelector('#tes').disabled = true
    let up = localStorage.getItem('up')
    let lp = localStorage.getItem('lp')
    let rand = Math.floor(Math.random() * 3)
    if (escolha==rand){
        r=2
    }else{
        if (escolha==0){
            if (rand==1){
                r=1
                lp++
            }else{
                r=0
                up++
            }
        }else if (escolha==1){
            if (rand==2){
                r=1
                lp++
            }else{
                r=0
                up++
            }
        }else if (escolha==2){
            if (rand==0){
                r=1
                lp++
            }else{
                r=0
                up++
            }
        }
    }
sec2.style.backgroundColor = 'black'
document.querySelector('#user').style.textDecoration = 'none'
document.querySelector('#local').style.textDecoration = 'none'
resu.style.fontSize= '90px'
resu.innerHTML="Jo..."
setTimeout(() =>{resu.innerHTML="Ken..."}, 500)
setTimeout(() =>{resu.innerHTML="Po!!!"}, 1000)
setTimeout(() =>{
    resu.innerHTML=`${sym[escolha]} vs ${sym[rand]}</br>${resultado[r]}`
    resu.style.fontSize= '50px'
}, 1500)
setTimeout(() =>{
    document.querySelector('#ped').disabled = false
    document.querySelector('#pap').disabled = false
    document.querySelector('#tes').disabled = false
    if (r==0){
        document.querySelector('#user').innerHTML=up
        document.querySelector('#user').style.textDecoration = 'underline'
    }else if (r==1){
        document.querySelector('#local').innerHTML=lp
        document.querySelector('#local').style.textDecoration = 'underline'
    }
    localStorage.setItem('up', up)
    localStorage.setItem('lp', lp)
}, 1700)
}
