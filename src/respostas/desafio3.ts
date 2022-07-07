const botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
const botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
const soma = document.getElementById('soma') as HTMLInputElement;
const campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;


let saldo = 0;

function somarSaldo(soma: number) {
  saldo += soma;
  campoSaldo.innerHTML = saldo.toString()
}

function zerarSaldo() {
  campoSaldo.innerHTML = (0).toString();
}

botaoAtualizar.addEventListener('click', () => {
  somarSaldo(Number(soma.value))
})

botaoLimpar.addEventListener('click', () => {
  zerarSaldo()
})


/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo">0</span></h1>
 */