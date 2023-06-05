const nombre = document.querySelector('.nombre')
const apellidos = document.querySelector('.apellidos')
const telefono = document.querySelector('.telefono')
const ciudad = document.querySelector('.ciudad')
const direccion = document.querySelector('.direccion')
const btnAgregarTarea = document.querySelector('.btn-agregar-tarea')

const listadoDeContactos = document.querySelector('.listado-de-contactos')

const db = window.localStorage

btnAgregarTarea.onclick = () => {
    let contacto = {
        id: Math.random(1,100),
        nombre: nombre.value,
        apellidos: apellidos.value,
        telefono: telefono.value,
        ciudad: ciudad.value,
        direccion: direccion.value,

    }
    guardarContacto(db,contacto)
}

cargarContactos(db, listadoDeContactos)