let jogosAlugados = 1;

function QuantosjogosAlugados(){
    console.log(`Foram alugados ${jogosAlugados}`);
}


function alterarStatus(id) {
    
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)){
            alert('Jogo devolvido com sucesso');
        }
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        jogosAlugados--;
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        jogosAlugados++;
        botao.textContent = 'Devolver';
       
    }
    QuantosjogosAlugados();
}