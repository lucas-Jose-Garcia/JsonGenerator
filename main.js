function gerarJson() {

    codigo = document.getElementById('codigo').value;
    identificador = document.getElementById('identificador').value;
    validacoes = document.getElementById('validacoes').value;
    retorno = document.getElementById('retorno').value;
    detalhes = converterDetalhes(document.getElementById('detalhes').value);
    resultado = document.getElementById('resultado');

    output = `, {
    "codigo": ${codigo},
    "identificador": "${identificador}",
    ${validacoes != '' ? `"validacoes": ${validacoes},` : ''}
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
    document.getElementById('detalhes').value = '';
}