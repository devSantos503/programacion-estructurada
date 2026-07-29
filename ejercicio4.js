import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el precio unitario del producto: ', (precioTexto) => {
  rl.question('Ingrese la cantidad que desea comprar: ', (cantidadTexto) => {
    const precioUnitario = parseFloat(precioTexto);
    const cantidad = parseInt(cantidadTexto);
    const total = precioUnitario * cantidad;

    console.log(`\nEl total a pagar por ${cantidad} producto(s) es: ${total.toFixed(2)}`);

    rl.close();
  });
});