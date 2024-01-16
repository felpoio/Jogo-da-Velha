let jogadorDaVez // criar função pra selecionar qual o jogador da vez

const jogo = {
    tabuleiro: [[0, 0, 0], [0, 0, 0], [0, 0 ,0]]
}

function criaJogador(nome, marcador) {
    return {nome, marcador}
}

// **Tirar esse código do global**
const jogador1 = criaJogador('Felipe Rangel', 'X')
const jogador2 = criaJogador('Maria Eduarda', 'O')

function selecionaQuadrado(id, jogador){

}

// Função que cria os quadrados para marcar e adiciona a função que recebe o clique em cada um
function criaQuadrado() {
    let container = document.querySelector('#container')
    for (let i = 1; i < 10; i++) {
        let quadrado = document.createElement('div')
        quadrado.id = i
        quadrado.addEventListener('click', () => selecionaQuadrado(quadrado.id, jogadorDaVez))
        container.appendChild(quadrado)
    }
}

criaQuadrado()