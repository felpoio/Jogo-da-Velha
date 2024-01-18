function criaJogador(nome, marcador, num) {
    return {nome, marcador, num}
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
    if (quadrado.innerHTML === ''){
        quadrado.innerHTML = jogador.marcador
        jogo.tabuleiro[id[3]][id[4]] = jogador.num
        checaVencedor(jogo.tabuleiro, jogador)
        trocaJogador(jogador)
    }
}

function trocaJogador(jogador){
    if (jogador === jogador1) {
        jogadorDaVez = jogador2
    } else {
        jogadorDaVez = jogador1
    }
}

function checaVencedor(tabuleiro, jogador){
    if (tabuleiro[0][0] !== 0 && tabuleiro[0][0] === tabuleiro[0][1] && tabuleiro[0][0] === tabuleiro[0][2]){
        console.log(`${jogador.nome} ganhou!`)
    } else if (tabuleiro[1][0] !== 0 && tabuleiro[1][0] === tabuleiro[1][1] && tabuleiro[1][0] === tabuleiro[1][2]) {
        console.log(`${jogador.nome} ganhou!`)
    } else if (tabuleiro[2][0] !== 0 && tabuleiro[2][0] === tabuleiro[2][1] && tabuleiro[2][0] === tabuleiro[2][2]){
        console.log(`${jogador.nome} ganhou!`)
    } else if (tabuleiro[0][0] !== 0 && tabuleiro[0][0] === tabuleiro[1][0] && tabuleiro[0][0] === tabuleiro[2][0]){
        console.log(`${jogador.nome} ganhou!`)
    } else if (tabuleiro[0][1] !== 0 && tabuleiro[0][1] === tabuleiro[1][1] && tabuleiro[0][1] === tabuleiro[2][1]){
        console.log(`${jogador.nome} ganhou!`)
    } else if (tabuleiro[0][2] !== 0 && tabuleiro[0][2] === tabuleiro[1][2] && tabuleiro[0][2] === tabuleiro[2][2]){
        console.log(`${jogador.nome} ganhou!`)
    } else if (tabuleiro[0][0] !== 0 && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[0][0] === tabuleiro[2][2]){
        console.log(`${jogador.nome} ganhou!`)
    } else if (tabuleiro[0][2] !== 0 && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[0][2] === tabuleiro[2][0]){
        console.log(`${jogador.nome} ganhou!`)
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