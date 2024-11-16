var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Bruna = window.document.getElementById("Bruna")
var Samantha = window.document.getElementById("Samantha")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"   

}

function RolarParaEsquerda() {
    Leonardo.style = "display: flex"
    Bruna.style = "display: none"
    setaDireita.style ="display: flex"
    setaEsquerda.style ="display: none"
}