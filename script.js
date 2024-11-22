var moldura;
var botaoVoltar;
var botaoAvancar;
var indice = 0;
var temporizador;
var fotos;
const pastaImagem = "Imagens/";
const extensaoImagem = ".jpg";

botaoVoltar = document.getElementById("btn_voltar");
botaoAvancar = document.getElementById("btn_avancar");

moldura = document.getElementById("moldura");

fotos = ["foto1", "foto2", "foto3", "foto4", "foto5", "foto6", "foto7", "foto8", "foto9", "foto10"];

window.onload = Inicio;

function Inicio() {
    MostrarFoto();
    botaoAvancar.onclick = Avancar;
    botaoVoltar.onclick = Voltar;
}

function MostrarFoto() {
    moldura.src = pastaImagem + fotos[indice] + extensaoImagem;
}

function Avancar() {
    if (indice < fotos.length - 1) {
        indice++;
    } else {
        indice = 0;
    }
    MostrarFoto();
    console.log(indice);
}

function Voltar() {
    if (indice > 0) {
        indice--;
    } else {
        indice = fotos.length - 1; 
    }
    MostrarFoto();
    console.log(indice);
}


const navEl = document.querySelector('.nav');
const hamburguerEl = document.querySelector('.hamburguer');

hamburguerEl.addEventListener('click', () => {
    console.log("Hamburguer clicado!");
    navEl.classList.toggle('nav--open');
});
