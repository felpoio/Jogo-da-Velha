function Game(jogador1, jogador2) {
    let container = document.querySelector('#container')
    let jogadorDaVez = jogador1
    let exibeJogador = document.querySelector('#jogadorDaVez')
    const jogo = {
        tabuleiro: [[0, 0, 0], [0, 0, 0], [0, 0 ,0]]
    }

    container.innerHTML = ''
    exibeJogador.innerHTML = `Vez de ${jogador1.nome}`

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
            exibeJogador.innerHTML = `Vez de ${jogadorDaVez.nome}`
        } else {
            jogadorDaVez = jogador1
            exibeJogador.innerHTML = `Vez de ${jogadorDaVez.nome}`
        }
    }

    function checaVencedor(tabuleiro, jogador){
        let modalGanhador = document.querySelector('#fimDeJogo')
        let p = document.createElement('p')
        let button = document.createElement('button')
        button.addEventListener('click', () => {
            Game(jogador1, jogador2)
            modalGanhador.close()
            modalGanhador.innerHTML = ''
        })
        button.innerHTML = 'Novo Jogo'

        console.log(tabuleiro[0].includes(0))
    
        if (tabuleiro[0][0] !== 0 && tabuleiro[0][0] === tabuleiro[0][1] && tabuleiro[0][0] === tabuleiro[0][2]){
            p.innerHTML = `${jogador.nome} ganhou!`
            modalGanhador.appendChild(p)
            modalGanhador.appendChild(button)
            modalGanhador.showModal()
        } 
        else if (tabuleiro[1][0] !== 0 && tabuleiro[1][0] === tabuleiro[1][1] && tabuleiro[1][0] === tabuleiro[1][2]) {
            p.innerHTML = `${jogador.nome} ganhou!`
            modalGanhador.appendChild(p)
            modalGanhador.appendChild(button)
            modalGanhador.showModal()
        } 
        else if (tabuleiro[2][0] !== 0 && tabuleiro[2][0] === tabuleiro[2][1] && tabuleiro[2][0] === tabuleiro[2][2]){
            p.innerHTML = `${jogador.nome} ganhou!`
            modalGanhador.appendChild(p)
            modalGanhador.appendChild(button)
            modalGanhador.showModal()
        } 
        else if (tabuleiro[0][0] !== 0 && tabuleiro[0][0] === tabuleiro[1][0] && tabuleiro[0][0] === tabuleiro[2][0]){
            p.innerHTML = `${jogador.nome} ganhou!`
            modalGanhador.appendChild(p)
            modalGanhador.appendChild(button)
            modalGanhador.showModal()
        } 
        else if (tabuleiro[0][1] !== 0 && tabuleiro[0][1] === tabuleiro[1][1] && tabuleiro[0][1] === tabuleiro[2][1]){
            p.innerHTML = `${jogador.nome} ganhou!`
            modalGanhador.appendChild(p)
            modalGanhador.appendChild(button)
            modalGanhador.showModal()
        } 
        else if (tabuleiro[0][2] !== 0 && tabuleiro[0][2] === tabuleiro[1][2] && tabuleiro[0][2] === tabuleiro[2][2]){
            p.innerHTML = `${jogador.nome} ganhou!`
            modalGanhador.appendChild(p)
            modalGanhador.appendChild(button)
            modalGanhador.showModal()
        } 
        else if (tabuleiro[0][0] !== 0 && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[0][0] === tabuleiro[2][2]){
            p.innerHTML = `${jogador.nome} ganhou!`
            modalGanhador.appendChild(p)
            modalGanhador.appendChild(button)
            modalGanhador.showModal()
        } 
        else if (tabuleiro[0][2] !== 0 && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[0][2] === tabuleiro[2][0]){
            p.innerHTML = `${jogador.nome} ganhou!`
            modalGanhador.appendChild(p)
            modalGanhador.appendChild(button)
            modalGanhador.showModal()
        }
        else if (tabuleiro[0].includes(0) === false && tabuleiro[1].includes(0) === false && tabuleiro[2].includes(0) === false){
            p.innerHTML = 'Deu Velha!'
            modalGanhador.appendChild(p)
            modalGanhador.appendChild(button)
            modalGanhador.showModal()
        }
    }

    criaQuadrado()
}

function startGame() {
    function criaJogador(nome, marcador, num) {
        return {nome, marcador, num}
    }

    let inicio = document.querySelector('#inicioDeJogo')
    inicio.showModal()

    let startButton = document.querySelector('#game-start')

    startButton.addEventListener('click', () => {
        let jogador1_nome = document.querySelector('#nome-jogador1').value
        let jogador2_nome = document.querySelector('#nome-jogador2').value
        let jogador1_marcador = document.querySelector('input[name="marcador"]:checked').value
        let jogador2_marcador
        if (jogador1_marcador === 'X'){
            jogador2_marcador = 'O'
        } else {
            jogador2_marcador = 'X'
        }
    
        const jogador1 = criaJogador(jogador1_nome, jogador1_marcador, 1)
        const jogador2 = criaJogador(jogador2_nome, jogador2_marcador, 2)

        inicio.close()
        Game(jogador1, jogador2)
    })  
}

startGame()