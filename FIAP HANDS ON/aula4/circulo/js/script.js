function calcular() {
    let raio = parseFloat(document.getElementById("raio").value);
    let area = (Math.PI * Math.pow(raio, 2)).toFixed(2);
    let comprimento = (2 * Math.PI * raio).toFixed(2);

    document.getElementById("res").innerHTML = `Área calculada: ${area.toString()}  <br> Comprimento calculado ${comprimento.toString()}`;

}