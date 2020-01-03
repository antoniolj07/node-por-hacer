const op1 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', op1)
    .command('actualizar', 'Actualiza el estadocompleto de una tarea', {
        op1,
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'Borrar la descripcion de una tarea por hacer', op1)
    .help()
    .argv;

module.exports = {
    argv
}