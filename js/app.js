const perguntas = [
    {
        pergunta: 'Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?',
        opcoes: ['Tem entre 2 a 4 litros. São retirados 450 mililitros', 'Tem entre 4 a 6 litros. São retirados 450 mililitros', 'Tem 10 litros. São retirados 2 litros', ' Tem 7 litros. São retirados 1,5 litros'],
        resposta: 'Tem entre 4 a 6 litros. São retirados 450 mililitros'
    },
    {
        pergunta: 'De onde é a invenção do chuveiro elétrico?',
        opcoes: [' França', 'Inglaterra', 'Brasil', 'Austrália'],
        resposta: 'Brasil'
    },
    {
        pergunta: 'Qual o livro mais vendido no mundo a seguir à Bíblia?',
        opcoes: ['O Senhor dos Anéis', 'Dom Quixote', 'O Pequeno Príncipe', 'Harry Potter'],
        resposta: 'Dom Quixote'
    },
    {
        pergunta: 'Atualmente, quantos elementos químicos a tabela periódica possui?',
        opcoes: ['113', '109', '108', '118'],
        resposta: '118'
    },
    {
        pergunta: 'Acabar Quiz?',
        opcoes: ['Sim', 'Claro'],
        resposta: 'Sim'
    },
];

const perguntaElemento = document.getElementById('pergunta');
const opcoesElemento = document.getElementById('opcoes');
const resulatdoElemento = document.getElementById('resultado');

let indicePerguntaAtual = 0;

function carregarPergunta() {
    const perguntaAtual = perguntas[indicePerguntaAtual];
    perguntaElemento.textContent = perguntaAtual.pergunta;

    opcoesElemento.innerHTML = '';
    perguntaAtual.opcoes.forEach(opcao => {
        const botao = document.createElement('button');
        botao.textContent = opcao;
        botao.addEventListener('click', () => verificarResposta(opcao));
        opcoesElemento.appendChild(botao);
    });
}

function verificarResposta(respostaSelecionada) {
    const perguntaAtual = perguntas[indicePerguntaAtual];
    if (respostaSelecionada === perguntaAtual.resposta) {
        resulatdoElemento.textContent = 'Resposta Correta!';
        resulatdoElemento.className = 'correto';
    } else {
        resulatdoElemento.textContent = 'Resposta incorreta. A resposta correta é:' + perguntaAtual.resposta;
        resulatdoElemento.className = 'incorreto'
    }

    //Avança para proxima pergunta ou finaliza o quiz
    indicePerguntaAtual++;
    if (indicePerguntaAtual < perguntas.length) {
        setTimeout(carregarPergunta, 2000); // Carrega para a proxima pergunta após 2 seg
    } else {
        resulatdoElemento.textContent = 'Quiz concluido!';
        resulatdoElemento.className = '';
    }
}

//Carrega a primeira pergunta quando a página carrega
carregarPergunta();

function recarregarAPagina() {
    window.location.reload();
} 