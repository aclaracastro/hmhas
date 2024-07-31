const botaoPlayPause = document.getElementById('play-pause'); 
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const nomeMusica = document.getElementById('musica');
const audioMusica = document.getElementById('audio-musica');

const nomeMusicas = [
    "SKINNY",
    "LUNCH",
    "CHIHIRO",
    "BIRDS OF A FEATHER",
    "WILDFLOWER",
    "THE GREATEST",
    "L'AMOUR DE MA VIE",
    "THE DINER",
    "BITTERSUITE",
    "BLUE"
];

const numeroMusicas = nomeMusicas.length; 
let taTocando = 0;
let musicaAtual = 0;

function tocarFaixa(){
    audioMusica.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
    taTocando = 1;
}

function pausarFaixa(){
    audioMusica.pause();
    botaoPlayPause.classList.add('bi-play-circle-fill');
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    taTocando = 0;
}

function tocarOuPausar(){
    if (taTocando === 0){
        tocarFaixa();
    } else {
        pausarFaixa();
    }
}

function trocarNomeFaixa(){
    nomeMusica.innerText = nomeMusicas[musicaAtual];
}

function proximaFaixa(){
    musicaAtual = (musicaAtual + 1) % numeroMusicas;
    audioMusica.src = "./audios/" + (musicaAtual + 1) + '.mp3';
    audioMusica.load(); 
    trocarNomeFaixa();
    tocarFaixa();
}

function voltarFaixa(){
    musicaAtual = (musicaAtual - 1 + numeroMusicas) % numeroMusicas;
    audioMusica.src = "./audios/" + (musicaAtual + 1) + '.mp3';
    audioMusica.load(); 
    trocarNomeFaixa();
    tocarFaixa();
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);