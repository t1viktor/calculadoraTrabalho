function calcularSalario() {
    var valorHora = parseFloat(document.getElementById('valorHora').value);
    var horasTrabalhadas = parseFloat(document.getElementById('horasTrabalhadas').value);

    var salarioBruto = valorHora * horasTrabalhadas;

    var impostoRenda = 0.11 * salarioBruto;
    var inss = 0.08 * salarioBruto;
    var sindicato = 0.05 * salarioBruto;

    var salarioLiquido = salarioBruto - impostoRenda - inss - sindicato;

    document.getElementById('salarioBruto').textContent = 'R$ ' + salarioBruto.toFixed(2);
    document.getElementById('descontoINSS').textContent = 'R$ ' + inss.toFixed(2);
    document.getElementById('descontoSindicato').textContent = 'R$ ' + sindicato.toFixed(2);
    document.getElementById('salarioLiquido').textContent = 'R$ ' + salarioLiquido.toFixed(2);
    document.getElementById('totalDescontos').textContent = 'R$ ' + (impostoRenda + inss + sindicato).toFixed(2);
}