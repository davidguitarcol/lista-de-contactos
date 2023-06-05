const  guardarContacto = (db, contacto) =>{
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/'  
}

const cargarContactos = (db, parentNode) =>{
    let claves = Object.keys(db)
 
    for(clave of claves){
       let contacto = JSON.parse(db.getItem(clave))
       crearContacto(parentNode,contacto,db)
    }
}

const crearContacto = (parentNode,contacto,db) =>{

    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let apellidosContacto = document.createElement('p')
    let telefonoContacto = document.createElement('p')
    let ciudadContacto = document.createElement('p')
    let direccionContacto = document.createElement('P')
    let iconoBorrar = document.createElement("span")


    nombreContacto.innerHTML = contacto.nombre
    apellidosContacto.innerHTML = contacto.apellidos
    telefonoContacto.innerHTML = contacto.telefono
    ciudadContacto.innerHTML = contacto.ciudad
    direccionContacto.innerHTML = contacto.direccion
    iconoBorrar.innerHTML = "delete_forever"

    divContacto.classList.add("tarea")
    iconoBorrar.classList.add("material-icons", "icono")

    iconoBorrar.onclick = () =>{
        db.removeItem(contacto.id)
        window.location.href = '/'
    }

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(apellidosContacto)
    divContacto.appendChild(telefonoContacto)
    divContacto.appendChild(ciudadContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)

}


