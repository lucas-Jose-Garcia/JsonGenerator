function gerarJson() {

    const codigo = document.getElementById('codigo').value;
    const identificador = document.getElementById('identificador').value;
    const validacoes = document.getElementById('validacoes').value;
    const retorno = document.getElementById('retorno').value;
    const detalhes = converterDetalhes(document.getElementById('detalhes').value);
    const resultado = document.getElementById('resultado');

    const arrValidacoes = validacoes.split(',');
    let textValidacores = '';
    arrValidacoes.forEach(element => {
        textValidacores += `"${element}"` 
    });
    console.log(textValidacores);
    const output = `, {
    "codigo": ${codigo},
    "identificador": "${identificador}",
    ${validacoes != '' ? `"validacoes": [${validacoes}],` : ''}
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


function adicionaTexto() {
    const detalhes = document.getElementById('detalhes');
    detalhes.value = `Siga os seguintes passos:\n\n- `;
}

adicionaTexto()