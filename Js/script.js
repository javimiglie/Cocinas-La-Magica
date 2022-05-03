let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

//const botonTerminar = document.getElementById('terminar')
//const finCompra = document.getElementById('fin-compra')

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const selecPrecio = document.getElementById('selecPrecio')
const buscador = document.getElementById('search')



//Falta Crear Filtro para ordenar por $
/*
selecPrecio.addEventListener("change", () => {

})



//Falta finalizar compra en carrito

*/
function bienvenida() {
    Swal.fire({
        title: "Bienvenidos a Cocinas La Mágica",
        text: "A continuación encontrarás todos nuestros modelos de cocinas",
        imageUrl: "https://cocinaslamagica.com.ar/wp-content/uploads/2021/04/logo-color1.png",
        confirmButtonText: "Continuar"
    })
}



function mostrarProductos(array) {
    contenedorProductos.innerHTML = ""

    array.forEach(item => {

        let div = document.createElement("div")
        div.classList.add("producto")

        div.innerHTML += `
                    <div class="card">
                        <div class="card-image">
                            <img src=${item.img}>
                            <span class="card-title">${item.nombre}</span>

                        </div>
                        <div class="card-content">
                            <p>${item.descripcion}</p>
                            <p> $${item.precio}</p>
                            <a  id="agregar${item.id}" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
                        </div>
                    </div>
    `
        contenedorProductos.appendChild(div)

        let btnAgregar = document.getElementById(`agregar${item.id}`)

        btnAgregar.addEventListener("click", () => {
            agregarAlCarrito(item.id)
        })

    })
};


function agregarAlCarrito(id) {
    let yaEsta = carritoDeCompras.find(item => item.id == id)

    if (yaEsta) {
        yaEsta.cantidad++
            document.getElementById(`und${yaEsta.id}`).innerHTML = ` <p id=und${yaEsta.id}>Und:${yaEsta.cantidad}</p>`
        actualizarCarrito()
    } else {
        let productoAgregar = stockProductos.find(elemento => elemento.id == id)

        productoAgregar.cantidad = 1

        carritoDeCompras.push(productoAgregar)

        actualizarCarrito()

        mostrarCarrito(productoAgregar)
    }
    Toastify({
        text: "Has agregado un producto",
        duration: 2000,
        gravity: "bottom",
        position: "right",
        style: {
            background: "linear-gradient(62deg, #f51906 0%, #ff9300 100%)",
        }
    }).showToast();

    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras))

};





function mostrarCarrito(productoAgregar) {

    let div = document.createElement("div")
    div.className = "productoEnCarrito"
    div.innerHTML = `
                    <p>${productoAgregar.nombre}</p>
                    <p>Precio: $${productoAgregar.precio}</p>
                    <p id="und${productoAgregar.id}">Und:${productoAgregar.cantidad}</p>
                    <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
    `
    contenedorCarrito.appendChild(div)

    let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`)

    btnEliminar.addEventListener("click", () => {


        if (productoAgregar.cantidad == 1) {
            btnEliminar.parentElement.remove()
            carritoDeCompras = carritoDeCompras.filter(item => item.id != productoAgregar.id)
            actualizarCarrito()
            localStorage.setItem("carrito", JSON.stringify(carritoDeCompras))
        } else {
            productoAgregar.cantidad = productoAgregar.cantidad - 1
            document.getElementById(`und${productoAgregar.id}`).innerHTML = ` <p id=und${productoAgregar.id}>Und:${productoAgregar.cantidad}</p>`
            actualizarCarrito()
            localStorage.setItem("carrito", JSON.stringify(carritoDeCompras))
        }
        Toastify({
            text: "Has eliminado un producto",
            duration: 2000,
            gravity: "bottom",
            position: "right",
            style: {
                background: "linear-gradient(62deg, #f51906 0%, #ff9300 100%)",
            }
        }).showToast();

    })


};



function actualizarCarrito() {
    contadorCarrito.innerText = carritoDeCompras.reduce((acc, el) => acc + el.cantidad, 0)
    precioTotal.innerText = carritoDeCompras.reduce((acc, el) => acc + (el.precio * el.cantidad), 0)
};




function recuperar() {
    let recuperarLS = JSON.parse(localStorage.getItem('carrito'))


    if (recuperarLS) {
        recuperarLS.forEach(el => {
            mostrarCarrito(el)
            carritoDeCompras.push(el)
            actualizarCarrito()
        })
    }


};
bienvenida();
mostrarProductos(stockProductos);
recuperar();