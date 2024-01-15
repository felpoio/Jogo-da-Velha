function Game() {
    tabuleiro = [[0, 0, 0], [0, 0, 0], [0, 0 ,0]]
}

function criaJogador(nome, marcador) {
    return {nome, marcador}
}

const jogador1 = criaJogador('Felipe Rangel', 'X')
const jogador2 = criaJogador('Maria Eduarda', 'O')