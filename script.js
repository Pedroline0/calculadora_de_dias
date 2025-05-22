function calcularData() {
    const dataInicial = document.getElementById('dataInicial').value;
    const diasAdicionar = parseInt(document.getElementById('diasAdicionar').value);

    if (!dataInicial || isNaN(diasAdicionar)) {
        alert('Por favor, preencha a data inicial e a quantidade de dias.');
        return;
    }

    const partesData = dataInicial.split('-');
    const data = new Date(partesData[0], partesData[1] - 1, partesData[2]);
    data.setDate(data.getDate() + diasAdicionar);

    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();

    const dataFinal = `${dia}/${mes}/${ano}`;
    document.getElementById('dataFinal').innerText = dataFinal;
}
