//IMportaciones
import {mercarProducto} from './mercarProducto.js'
import {cargarInfoModal} from './cargarInfoModal.js'

//Variables GLOBALES
let carrito=[]
let producto={}

//Referencias a etiquetas del HTML
let filaproductos=document.getElementById("fila")
let modalInfoProducto = new bootstrap.Modal(document.getElementById('infoProducto'))
let botonAgregarCarrito=document.getElementById("botonAgregarCarrito")

//Escucho cuando hagan clic en la fila de los productos
filaproductos.addEventListener("click",function(event){

    producto=mercarProducto(event)
    console.log(producto)
    cargarInfoModal(producto)
    modalInfoProducto.show()

})