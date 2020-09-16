const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer.'
}

const completado = {
    demand: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea los elementos.', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea.', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una elemento.', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}