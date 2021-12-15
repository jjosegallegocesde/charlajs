//Resolver probelas con JS utilizamos VARIABLES
//VARIABLE es una "caja", un espacio en memoria para almacenar DATOS

//JS ES UN LENGUAJE INTERPRETADO
//JS ES UN LENGUAJE DINAMICAMENTE TIPADO

//ARREGLO es una variable especial que me permite almacenar varios datos en
//1 SOLA VARIABLE
/*let productos=["camiseta","gorra","termo"]
console.log(productos)
console.log(productos[0])*/

//OBJETO es una variable especial que almacena muchos datos DIFERRENTES
//en una sola variable
/*let objetoProductos={
    nombre:"Camiseta",
    precio:50000,
    cantidad:5,
    foto:"http://www.fotos.com"
}
console.log(objetoProductos)
console.log(objetoProductos.nombre)*/

//MAIZENA DE ARREGLOS CONS ABOR A OBJETOS
let productos = [

    { foto: 'img/tienda1.jpg', nombre: "Batimovil Escala", precio: 150000, cantidad: 0 },
    { foto: 'img/tienda2.jpg', nombre: "Camiseta Batman", precio: 50000, cantidad: 0 },
    { foto: 'img/tienda3.jpg', nombre: "Gorra Batman DC", precio: 25000, cantidad: 0 },
    { foto: 'img/tienda4.jpg', nombre: "Termo Batman DC", precio: 35500, cantidad: 0 },
    { foto: 'img/tienda5.jpg', nombre: "Batman v Superman", precio: 95000, cantidad: 0 },
    { foto: 'img/tienda6.jpg', nombre: "Maleta Batman", precio: 250000, cantidad: 0 },
    { foto: 'img/tienda7.jpg', nombre: "Silla Batman PRO", precio: 1500000, cantidad: 0 },
    { foto: 'img/tienda8.jpg', nombre: "Comics Batman", precio: 350000, cantidad: 0 },
    { foto: 'img/tienda9.jpg', nombre: "Caja sorpresa", precio: 187000, cantidad: 0 },
    { foto: 'img/tienda10.jpg', nombre: "Lonchera Batman", precio: 70000, cantidad: 0 }
]


productos.forEach(function (producto) {

    let columna = document.createElement("div")
    columna.classList.add("col")

    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("p-2")
    tarjeta.classList.add("shadow")

    let imagen = document.createElement("img")
    imagen.classList.add("card-img-top")
    imagen.src = producto.foto

    let divisor = document.createElement("hr")

    let cuerpoTarjeta = document.createElement("div")
    cuerpoTarjeta.classList.add("card-body")

    let nombreProducto = document.createElement("h4")
    nombreProducto.classList.add("card-title")
    nombreProducto.classList.add("text-muted")
    nombreProducto.textContent = producto.nombre

    let precioProducto = document.createElement("p")
    precioProducto.classList.add("card-text")
    precioProducto.textContent = "$" + producto.precio



    //PADRES E HIJOS
    cuerpoTarjeta.appendChild(nombreProducto)
    cuerpoTarjeta.appendChild(precioProducto)


    tarjeta.appendChild(imagen)
    tarjeta.appendChild(divisor)
    tarjeta.appendChild(cuerpoTarjeta)

    columna.appendChild(tarjeta)

    fila.appendChild(columna)

})



