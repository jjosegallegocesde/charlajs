export function cargarInfoModal(producto){

    let fotoProducto=document.getElementById("fotoProducto")
    fotoProducto.src=producto.foto

    let nombreProducto=document.getElementById("nombreProducto")
    nombreProducto.textContent=producto.nombre
    
    let precioProducto=document.getElementById("precioProducto")
    precioProducto.textContent=producto.precio
}