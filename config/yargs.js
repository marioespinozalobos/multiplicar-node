// Opciones
const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 1
    }
}

// requireds
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea archivo de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}