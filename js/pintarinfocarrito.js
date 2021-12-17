export function pintarInfoCarrito(carrito){

    let filaPadre=document.getElementById("filainfocarrito")
    filaPadre.innerHTML=''

    carrito.forEach(function(producto){


        //CREAR ELEMENTOS
        let columna1=document.createElement("div")
        columna1.classList.add("col-12")
        columna1.classList.add("col-md-5")

        let columna2=document.createElement("div")
        columna2.classList.add("col-12")
        columna2.classList.add("col-md-7")

        let foto=document.createElement("img")
        foto.classList.add("w-100")
        foto.classList.add("img-fluid")
        foto.src=producto.foto

        let nombre=document.createElement("h4")
        nombre.textContent=producto.nombre

        let precio=document.createElement("h5")
        precio.textContent="Precio unidad: "+producto.precio

        let cantidad=document.createElement("h5")
        cantidad.textContent="cantidad: "+producto.cantidad

        //PADRES E HIJOS
        columna1.appendChild(foto)

        columna2.appendChild(nombre)
        columna2.appendChild(precio)
        columna2.appendChild(cantidad)

        filaPadre.appendChild(columna1)
        filaPadre.appendChild(columna2)


    })


}