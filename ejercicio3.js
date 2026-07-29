import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese una longitud en metros: ', (metrosTexto) => {
  const metros = parseFloat(metrosTexto);
  const centimetros = metros * 100;

  console.log(`\n${metros} metros equivalen a ${centimetros} centímetros.`);

  rl.close();
});