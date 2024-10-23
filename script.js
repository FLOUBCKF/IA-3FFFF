const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado')

const perguntas = [     //serve para abrir lista de perguntas
    {   //abre o objeto das perguntas
        enunciado: "Você acha que IA vai dominar o mundo?",
        alternativas: [
            {texto: "Sim",
            afirmação:"A IA vai dominar o mundo"}, 

            {texto: "Não",
            afirmação:"A IA não dominará o mundo"}]
    },
    { 
        enunciado: "A IA vai substituir os professores?",
        alternativas: [
            {texto: "Sim",
            afirmação:"A IA logo tomará o lugar dos professores"}, 
                
            {texto: "Não",
            afirmação:"A IA jamais tomará o lugar dos professores"}]
    },
    { 
        enunciado: "A IA está pronta para todos?",
        alternativas: [
            {texto: "Sim",
            afirmação:"Sim, a IA será útil e está pronta para todos"}, 
                
            {texto: "Não",
            afirmação:"Não, a IA não é para o uso de todos"}]
    },
]

let posicao = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (posicao >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    historiaFinal += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Num futuro próximo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
