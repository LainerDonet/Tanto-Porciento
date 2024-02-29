function ejecuted() {
  const inFormulario = document.getElementById("inFormulario");

  inFormulario.addEventListener("change", function () {
    const inParte = document.getElementById("inParte");
    const inPorciento = document.getElementById("inPorciento");
    const inTotal = document.getElementById("inTotal");

    let porciento = parseFloat(inPorciento.value);
    let totalTotal = parseFloat(inTotal.value);
    let parteTotal = parseFloat(inParte.value);
    if (porciento === 0 && parteTotal !== 0 && totalTotal !== 0) {
      porciento = (parteTotal * 100) / totalTotal;
      inPorciento.setAttribute("value", String(porciento));
      console.log(`porciento ${porciento}`);
    } else if (totalTotal === 0 && parteTotal !== 0 && porciento !== 0) {
      totalTotal = (parteTotal * 100) / porciento;
      inTotal.setAttribute("value", String(totalTotal));
      console.log(`Total ${totalTotal}`);
    } else if (parteTotal === 0 && porciento !== 0 && totalTotal !== 0) {
      parteTotal = (porciento * totalTotal) / 100;
      inParte.setAttribute("value", String(parteTotal));
      console.log(`parteTotal ${parteTotal}`);
    }
  });
}
