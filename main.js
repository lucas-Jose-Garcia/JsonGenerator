function gerarJson() {

    const codigo = document.getElementById('codigo').value;
    const identificador = document.getElementById('identificador').value;
    const validacoes = document.getElementById('validacoes').value;
    const retorno = document.getElementById('retorno').value;
    const detalhes = converterDetalhes(document.getElementById('detalhes').value);
    const resultado = document.getElementById('resultado');

    const output = `, {
    "codigo": ${codigo},
    "identificador": "${identificador}",${validacoes != '' ? `\n    "validacoes": [${validacoes}],` : ''}
    "retorno": "${retorno}",
    "detalhes" "${detalhes}"
}`
    resultado.value = output;
    limpar()
}

function converterDetalhes(detalhes) {
    const output = detalhes.replace(/(?:\r\n|\r|\n)/g, '\\n');
    return output
}

function limpar() {
    document.getElementById('codigo').value = '';
    document.getElementById('identificador').value = '';
    document.getElementById('validacoes').value = '';
    document.getElementById('retorno').value = '';
    document.getElementById('detalhes').value = 'Siga os seguintes passos:\n\n-';
}

function ValidaTipo() {
    const identificador = document.getElementById('identificador').value
    const validacoes = document.getElementById('validacoes')
    console.log(Number.isInteger(identificador));
    if (identificador.match(/^[0-9]/)) {
        validacoes.disabled = true;
        validacoes.placeholder = "";
    } else {
        validacoes.disabled = false;
        validacoes.placeholder = 'Ex: "<seg>", "Tamanho", "Permitido"';
    }
}

function copiar() {
    let resultado = document.querySelector('#resultado');
    navigator.clipboard.writeText(resultado.value);
    document.querySelector('#copiado').innerHTML = 'Texto copiado!';
    setTimeout(apagarLabel,3000)
}

function apagarLabel() {
    document.querySelector('#copiado').innerHTML = ''
}

window.onload = function() {
    limpar();
}