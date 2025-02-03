//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let nomeDisponivel = [];
let nomeSorteado = [];

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do Amigo Secreto');
}   

exibirMensagemInicial();


function adicionarAmigo() {
    let campoNome = document.querySelector('input');
    let nome = campoNome.value.trim(); // Remove espaços extras

    if (nome === '') {
        alert('Digite um nome válido!');
        return;
    }

    if (nomeDisponivel.includes(nome)) { // Verificar se há nomes duplicados
        alert('Este nome já foi adicionado!');
        return;
    }

    nomeDisponivel.push(nome);
    campoNome.value = ''; // Limpa o campo de entrada
    exibirListaNaTela();
}

// Exibe a lista na tela
function exibirListaNaTela() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = ''; // Limpa a exibição anterior
    
    nomeDisponivel.forEach(nome => {
        let elemento = document.createElement('p');
        elemento.textContent = nome;
        lista.appendChild(elemento);
    });
}