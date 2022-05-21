/*

const tarjeta = document.querySelector('#tarjeta');
const btnAbrirFormulario = document.querySelector('#btn-abrir-formulario')
const formulario = document.querySelector('#formulario-tarjeta')
const numeroTarjeta = document.querySelector('#tarjeta .numero')
const nombreTarjeta = document.querySelector('#tarjeta .nombre')
const logoMarca = document.querySelector('#logo-marca')
const firma = document.querySelector('#tarjeta .firma p')
const mesExpiracion = document.querySelector('#tarjeta .mes')
const yearExpiracion = document.querySelector('#tarjeta .year');
const ccv = document.querySelector('#tarjeta .ccv');
const btnFinalizarCompra = document.querySelector('#btnFinalizarCompra');








// * Mostrar el frente de la tarjeta
const mostrarFrente = () => {
    if (tarjeta.classList.contains('active')) {
        tarjeta.classList.remove('active');
    }
}

// * Rotar la tarjeta
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});

// * Boton de apertura del formulario
btnAbrirFormulario.addEventListener('click', () => {
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
});

// * Seleccionar mes
for (let i = 1; i <= 12; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);
}

// * Seleccionar año
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
}

// * Input numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNumero.value = valorInput
        // Eliminamos espacios en blanco
        .replace(/\s/g, '')
        // Eliminar las letras
        .replace(/\D/g, '')
        // Ponemos espacio cada cuatro numeros
        .replace(/([0-9]{4})/g, '$1 ')
        // Elimina el ultimo espaciado
        .trim();

    numeroTarjeta.textContent = valorInput;

    /// Valor por defecto de la tarjeta

    if (valorInput == '') {
        numeroTarjeta.textContent = '#### #### #### ####';

        logoMarca.innerHTML = '';
    }
    // Agrega marca de tarjeta según número
    if (valorInput[0] == 4) {
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = '../Media/visa.png';
        logoMarca.appendChild(imagen);
    } else if (valorInput[0] == 5) {
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = '../Media/mastercard.png';
        logoMarca.appendChild(imagen);
    } else if (valorInput[0] == 3) {
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = '../Media/logo.png';
        logoMarca.appendChild(imagen);
    }

    // Mostramos frente de la
    mostrarFrente();
});

// * Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
    nombreTarjeta.textContent = valorInput;
    firma.textContent = valorInput;

    if (valorInput == '') {
        nombreTarjeta.textContent = 'Jhon Doe';
    }

    mostrarFrente();
});

// * Seleccionar mes de Vencimiento
formulario.selectMes.addEventListener('change', (e) => {
    mesExpiracion.textContent = e.target.value;
    mostrarFrente();
});

// * Seleccionar año de vencimiento
formulario.selectYear.addEventListener('change', (e) => {
    yearExpiracion.textContent = e.target.value.slice(2);
    mostrarFrente();
});

// * Código de seguridad
formulario.inputCCV.addEventListener('keyup', () => {
    if (!tarjeta.classList.contains('active')) {
        tarjeta.classList.toggle('active');
    }

    formulario.inputCCV.value = formulario.inputCCV.value
        // Eliminar los espacios
        .replace(/\s/g, '')
        // Eliminar las letras
        .replace(/\D/g, '');

    ccv.textContent = formulario.inputCCV.value;
});

function finalizarCompra() {
    btnFinalizarCompra.addEventListener('click', (e) => {
        e.preventDefault(e);
        numero
        nombre
        mes
        year
        cvv
        //Validacion de los inputs
        if (inputNumero.value == 0 ||
            formulario.nombre.value == 0 ||
            formulario.mes.value == 0 ||
            formulario.year.value == 0 ||
            formulario.cvv.value == 0) {
            Toastify({
                text: "Por favor completa todos los campos",
                className: "info",
                position: "left",
                gravity: "bottom",
                style: {
                    background: "red",
                }
            }).showToast();
        } else {
            //Alerta para confirmar la compra
            Swal.fire({
                    title: 'Compra confirmada',
                    text: 'En 5 días te va a llegar tu producto',
                    imageUrl: 'https://c.tenor.com/9eFnSCwAiXQAAAAC/gracias-vuelvan-prontos.gif',
                    imageWidth: 600,
                    imageHeight: 300,
                    imageAlt: 'Gracias vuelvas prontos',
                }).then(() => {
                    location.href = 'index.html'
                })
                //Bucle para vaciar el carrito y local storage
            for (let i = carritoDeCompras.length; i > 0; i--) {
                carritoDeCompras.pop();
                actualizarCarrito();
                localStorage.clear();
            }




        };



    })
}
finalizarCompra();

*/