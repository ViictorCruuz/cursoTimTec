// JavaScript Document

// VARIÁVEIS

// buscando um elemento com aquele id e encurtando escrita
var atalho = document.getElementById('adicionar');
var sorteio = document.getElementById('sortear');
var frase = document.getElementById('citacao');
var contador = 0;
var novoNumero = 0;
// 
var citacao = [];
citacao[0] = 'Seja o melhor em tudo o que você se propõe a fazer!';
citacao[1] = 'Se não der certo, é porque você não tentou!';
citacao[2] = 'Que a força esteja com você!';
// 
var cor = [];
cor[0] = '#CCCCCC';
cor[1] = '#FFFF00';
cor[2] = '#FFCC00';
cor[3] = '#000000';
cor[4] = '#FFFFFF';
cor[5] = '#AAAAAA';

var rgba = "rgba(" + (Math.floor(Math.random()*255)) + " ," +
                Math.floor(Math.random()*255) + " ," +
                Math.floor(Math.random()*255) + " ," +
                (Math.random()) + ")";
    // LISTENERS -> OUVINTES -> GATILHOS

// addEventListener ele insere um gatilho no dereminado objeto
// por causa do gatilho, é possível disparar fuções NAO INTRUSIVAS
atalho.addEventListener('click', adicionarItem, false);
sorteio.addEventListener('click', novoSorteio,false);
frase.addEventListener('click', novaFrase,false);

// FUNCTIONS
function adicionarItem(){
    contador++;
    rgba = "rgba(" + (Math.floor(Math.random()*255)) + " ," +
    Math.floor(Math.random()*255) + " ," +
    Math.floor(Math.random()*255) + " ," +
    (Math.random()) + ")";
    // 
    document.getElementById('fundo').style.backgroundColor = rgba;
        alert('O valor de Contador é ' + contador + " rgba " + rgba);
}

function novoSorteio(){
    // Math.floor() > retira a parte decimal
    // Math.random() > numero randomico, o sorteio
    novoNumero = Math.floor(Math.random()*20);
    var colorir = Math.floor(Math.random()*cor.length);

    document.getElementById('fundo').style.backgroundColor = cor[colorir];
    // 
    alert('Resultado do Sorteio ' + novoNumero + " Nova Cor " + cor[colorir]);
}

function novaFrase(){
    novoNumero = Math.floor(Math.random()*citacao.length);
        alert("\"" + citacao[novoNumero] + "\"");
}