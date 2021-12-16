//IMportaciones
import {mercarProducto} from './mercarProducto.js'

//Variables GLOBALES
let carrito=[]
let producto={}

//Referencias a etiquetas del HTML
let filaproductos=document.getElementById("fila")

//Escucho cuando hagan clic en la fila de los productos
filaproductos.addEventListener("click",function(event){

    mercarProducto(event)

})