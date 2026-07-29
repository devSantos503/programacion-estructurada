import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el precio del producto: ', (precioTexto) => {
  rl.question('Ingrese el porcentaje de descuento: ', (descuentoTexto) => {
    const precio = parseFloat(precioTexto);
    const porcentajeDescuento = parseFloat(descuentoTexto);
    const valorDescuento = precio * (porcentajeDescuento / 100);
    const precioFinal = precio - valorDescuento;

    console.log('\nResultados del descuento');
    console.log(`Precio original: ${precio.toFixed(2)}`);
    console.log(`Porcentaje de descuento: ${porcentajeDescuento.toFixed(2)}%`);
    console.log(`Valor del descuento: ${valorDescuento.toFixed(2)}`);
    console.log(`Precio final a pagar: ${precioFinal.toFixed(2)}`);

    rl.close();
  });
});
