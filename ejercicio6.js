import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese un dato cualquiera: ', (datoTexto) => {
  const dato = parseFloat(datoTexto);

  if (isNaN(dato)) {
    console.log('El dato ingresado no es un número.');
  } else {
    console.log(`El dato ingresado sí es un número: ${dato}`);
  }

  rl.close();
});