function criaJogador(nome, marcador, id) {
    return {nome, marcador, id}
}

// **Tirar esse código do global**
const jogador1 = criaJogador('Felipe Rangel', 'X', 1)
const jogador2 = criaJogador('Maria Eduarda', 'O', 2)

let jogadorDaVez = jogador1// criar função pra selecionar qual o jogador da vez

const jogo = {
    tabuleiro: [[0, 0, 0], [0, 0, 0], [0, 0 ,0]]
}

function selecionaQuadrado(id, jogador){
    let quadrado = document.querySelector(`#${id}`)
    quadrado.innerHTML = jogador.marcador
    trocaJogador(jogador)
}

function trocaJogador(jogador){
    if (jogador === jogador1) {
        jogadorDaVez = jogador2
    } else {
        jogadorDaVez = jogador1
    }
}

// Função que cria os quadrados para marcar e adiciona a função que recebe o clique em cada um
function criaQuadrado() {
    let container = document.querySelector('#container')
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let quadrado = document.createElement('div')
            quadrado.id = `num${i.toString() + j.toString()}`
            quadrado.addEventListener('click', () => selecionaQuadrado(quadrado.id, jogadorDaVez))
            container.appendChild(quadrado)    
        }
    }
}

criaQuadrado()