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

let listaOculta = false; // Comando para esconder a lista após o primeiro nome sorteado

function adicionarAmigo() {
    let campoNome = document.querySelector('input');
    let nome = campoNome.value.trim(); // Comando para remover espaços extras

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
    
    if (listaOculta) {
        lista.style.display = 'none'; // Comando para ocultar a lista após o primeiro nome sorteado
        return;
    }

    lista.innerHTML = ''; // Limpa a exibição anterior
    lista.style.display = 'block'; // Para exibir a lista antes do sorteio

    nomeDisponivel.forEach(nome => {
        let elemento = document.createElement('p');
        elemento.textContent = nome;
        lista.appendChild(elemento);
    });
}

// Sorteia um nome e pergunta ao usuário
function sortearAmigo() {
    if (nomeDisponivel.length === 0) { // Verifica se a lista não está vazia
        alert('Não há nomes para sortear!');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * nomeDisponivel.length); // Sortear o nome
    let nomeSorteado = nomeDisponivel.splice(indiceSorteado, 1)[0]; // Remove e armazena o nome sorteado

    // Atualiza a tela com o nome sorteado e exibe os botões
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `Nome sorteado: ${nomeSorteado}, é seu nome? <br><br>
        <button onclick="refazerSorteio('${nomeSorteado}')">Sim</button>
        <button onclick="confirmarSorteio('${nomeSorteado}')">Não</button>`;
}

// Confirma o sorteio e esconde a lista
function confirmarSorteio(nome) {
    listaOculta = true;
    exibirListaNaTela(); // Atualiza a tela escondendo a lista
    document.querySelector('#resultado').innerHTML = `Nome sorteado: ${nome}`; // Remove os botões e exibe o resultado final
}

// Refaz o sorteio colocando o nome de volta
function refazerSorteio(nome) {
    nomeDisponivel.push(nome); // Recoloca o nome na lista
    sortearAmigo(); // Sorteia novamente
}
