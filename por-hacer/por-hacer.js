const fs = require('fs');

let listadoPorHacer = [];
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`data-base/data.json`, data, (err) => {
        if (err)
            throw new Error('No se pudo ejecutar', err)
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../data-base/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
    //console.log(listadoPorHacer);
}

let getListado = () => {
    cargarDB();
    return listadoPorHacer;
}


const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion: descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const actualizar = (descripcion, realizado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    if (index >= 0) {
        listadoPorHacer[index].realizado = realizado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    })
    if (listadoPorHacer.length === nuevoListado) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}