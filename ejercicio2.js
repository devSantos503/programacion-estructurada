import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("ingresa horas para convertir a minutos: ", function(horas){
    horas = Number(horas);
    let minutos = horas * 60;
    console.log(`El total de minutos en ${horas} horas es: ${minutos}`);
    rl.close();
});