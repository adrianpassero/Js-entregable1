// Un array de productos para tu petshop
const productosPetshop = [
    {
        nombre: "Alimento",
        precio: 15.000,
        stock: 20,
    },
    {
        nombre: "Piedritas",
        precio: 1.400,
        stock: 30,
    },
    {
        nombre: "Juguete",
        precio: 650,
        stock: 10,
    },
    {
        nombre: "Collar",
        precio: 300,
        stock: 20,
    },
    {
        nombre: "Cucha",
        precio: 7.800,
        stock: 8,
    },
];



// Datos de usuario para el inicio de sesión
const usuarioValido = "adrian";
const contraseñaValida = "1234";

// Función para verificar el inicio de sesión
function iniciarSesion() {

    while (true) {
        const usuarioIngresado = prompt("Ingrese su nombre de usuario:");
        const contraseñaIngresada = prompt("Ingrese su contraseña:");

        // Verificar si el usuario quiere cancelar
        if (usuarioIngresado === 'cancelar') {
            alert("Inicio de sesión cancelado.");
            return; // Salir de la función de inicio de sesión
        }


        if (usuarioIngresado === usuarioValido && contraseñaIngresada === contraseñaValida) {
            alert("Inicio de sesión exitoso. Ahora puedes agregar productos.");
            elegirProducto(); // Llamar a la función para agregar productos después del inicio de sesión
            return; // Salir de la función de inicio de sesión
        } else {
            alert("Credenciales incorrectas. Intente nuevamente.");
        }
    }
}

// Llamar a la función de inicio de sesión
iniciarSesion();


// Función para elegir un producto dentro del array productosPetshop
function elegirProducto() {
    // Mostrar la lista de productos disponibles
    console.log("Productos disponibles:");

    for (let i = 0; i < productosPetshop.length; i++) {
        console.log(`${i + 1}. ${productosPetshop[i].nombre}`);
    }

    // Solicitar al usuario que elija un producto por número
    let numeroProducto;

    while (isNaN(numeroProducto) || numeroProducto < 1 || numeroProducto > productosPetshop.length) {
        numeroProducto = parseInt(prompt("Ingrese el número del producto que desea:"));
    }

    const productoElegido = productosPetshop[numeroProducto - 1];
    console.log(`Ha elegido el producto: ${productoElegido.nombre}`);
}

// Llamar a la función para elegir un producto
elegirProducto();






