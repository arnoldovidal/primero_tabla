const { options } = require('yargs');
const { tabla }=require('./funciones_externas/multiplicar');
const argv= require('./config/yargs');

// const base=5;

// console.log(process.argv)
//console.log(argv)


tabla(argv.b,argv.l)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(err => console.log(err));
