import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el nombre del empleado: ', (nombre) => {
  rl.question('Ingrese la cantidad de horas trabajadas durante la semana: ', (horasTexto) => {
    rl.question('Ingrese el pago recibido por cada hora de trabajo: ', (pagoTexto) => {
      const horas = parseInt(horasTexto);
      const pagoPorHora = parseFloat(pagoTexto);
      const salarioSemanal = horas * pagoPorHora;

      console.log('\nResultados del empleado');
      console.log(`Nombre: ${nombre}`);
      console.log(`Horas trabajadas: ${horas}`);
      console.log(`Pago por hora: ${pagoPorHora.toFixed(2)}`);
      console.log(`Salario semanal: ${salarioSemanal.toFixed(2)}`);

      rl.close();
    });
  });
});