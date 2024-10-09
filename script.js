const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [     //serve para abrir lista de perguntas
    {   //abre o objeto das perguntas
        enunciado: "A IA está pronta para todos?",
        alternativas: [
            {texto: "Sim",
            afirmação:"Sim, a IA está pronta para ser usada por todos"}, 

            {texto: "Não",
            afirmação:"Não, a IA não está pronta para todos"}]
    },
    { 
        enunciado: "Você acha que a IA vai dominar o mundo?",
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
            afirmação:"A IA não irá substituir os professores"}]
    },
]

let posicao = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (posicao >= perguntas.length){
        mostraReultado();
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
function mostraReultado(){
    caixaPerguntas.textContent = "Em 2049..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
