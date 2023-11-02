let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto
    responsiveVoice.speak (texto,'Brazilian Portuguese Female',{rate:1.2});
}
function exibirMensagemInicial(){
    exibirTextoNaTela ("h1","Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número de 1 e 10.");
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
console.log(numeroSecreto == chute);
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','isso ai você acertou!');
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobriu o número secreto com ${tentativas} ${palavratentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p',`o número secreto é menor que ${chute}.`);
        }else{
            if (chute < numeroSecreto){
                exibirTextoNaTela('p',`o número secreto é maior que ${chute}.`);
            }
        }
        limparNumero();
        tentativas++;
    }
}

function gerarNumeroAleatorio(){
    let numeroSorteado = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroSorteado)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroSorteado);
        console.log(listaDeNumerosSorteados);
        return numeroSorteado;
    }
}

function limparNumero(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    exibirMensagemInicial();
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();
    limparNumero();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}