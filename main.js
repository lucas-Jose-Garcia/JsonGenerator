function ConverterDetalhes() {
    const detalhes = document.getElementById("detalhes").value;
    const output = detalhes.replace(/(?:\r\n|\r|\n)/g, '\\n');

    alert(output);

}