const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [ //serve para abrir lista de perguntas
    {//abre o objeto das perguntas
        enunciado: "Pergunta 1",
        alternativas: ["Alternativa 1","Alternativa 2"]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: ["Alternativa 1","Alternativa 2"]
    }
    
]

let atual = 0;
let pergunaAtual;

function mostraPerguntas(){
    pergunaAtual = perguntas[atual];
    caixaPerguntas.textContent = pergunaAtual
}