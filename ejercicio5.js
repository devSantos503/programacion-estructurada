import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la cantidad de dólares: ', (dolaresTexto) => {
  rl.question('Ingrese el tipo de cambio actual del euro: ', (tipoCambioTexto) => {
    const dolares = parseFloat(dolaresTexto);
    const tipoCambio = parseFloat(tipoCambioTexto);
    const euros = dolares * tipoCambio;

    console.log(`\n${dolares.toFixed(2)} dólares equivalen a ${euros.toFixed(2)} euros.`);

    rl.close();
  });
});