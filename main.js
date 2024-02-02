const form = document.getElementById('formulario');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const primeiroValor = document.getElementById('primeiro-valor');
    const segundoValor = document.getElementById('segundo-valor');
    const mensagemComparacao = document.getElementById('mensagem-comparacao');

    if (primeiroValor.value < segundoValor.value) {
        mensagemComparacao.innerHTML = `Perfeito! O valor ${primeiroValor.value} é menor que o valor ${segundoValor.value}`;

        mensagemComparacao.style.display = 'block';
        mensagemComparacao.classList.add('sucesso');
    } else if (primeiroValor.value > segundoValor.value) {
        mensagemComparacao.innerHTML = `Incorreto! O valor ${primeiroValor.value} é maior que o valor ${segundoValor.value}`;

        mensagemComparacao.style.display = 'block';
        mensagemComparacao.classList.add('erro');
    } else {
        mensagemComparacao.innerHTML = `Incorreto! O valor ${primeiroValor.value} é igual ao valor ${segundoValor.value}`;

        mensagemComparacao.style.display = 'block';
        mensagemComparacao.classList.add('igualdade');
    }

    primeiroValor.value = '';
    segundoValor.value = '';
})