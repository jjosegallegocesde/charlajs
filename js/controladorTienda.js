//IMportaciones
import {mercarProducto} from './mercarProducto.js'
import {cargarInfoModal} from './cargarInfoModal.js'
import {pintarInfoCarrito} from './pintarinfocarrito.js'

//Variables GLOBALES
let carrito=[] //un arreglo de productos (arerglo de objetos)
let producto={}

//Referencias a etiquetas del HTML
let filaproductos=document.getElementById("fila")
let modalInfoProducto = new bootstrap.Modal(document.getElementById('infoProducto'))
let modalInfoCarrito = new bootstrap.Modal(document.getElementById('infocarrito'))
let botonAgregarCarrito=document.getElementById("botonAgregarCarrito")
let pildora=document.getElementById("pildora")
let botonInfoCarrito=document.getElementById("botonverinfocarrito")

//Escucho cuando hagan clic en la fila de los productos
filaproductos.addEventListener("click",function(event){

    producto=mercarProducto(event)
    cargarInfoModal(producto)
    modalInfoProducto.show()

})

//Escucho cuando le hagan clic al boton agregar carrito
botonAgregarCarrito.addEventListener("click",function (){

    let cantidad=document.getElementById("cantidadProducto")
    producto.cantidad=cantidad.value

    carrito.push(producto)
    console.log(carrito)

    pildora.classList.remove("invisible")
    pildora.textContent=carrito.length

    modalInfoProducto.hide()

    cantidad.value="1"


})

//Escuchar el clic en el carrito de compras
botonInfoCarrito.addEventListener("click",function(){

    pintarInfoCarrito(carrito)
    modalInfoCarrito.show()

})