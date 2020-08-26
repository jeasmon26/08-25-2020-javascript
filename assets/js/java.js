/* Metodos de impresión. */
/* Metodo para mostrar mensajes */
function mensajeAlert() {
    alert("Hola Mundo!!!");
}

/* Prompt */
function cajitaDeTexto() {
    var nombre = prompt('Ingrese su nombre');
    document.write("<h1> Su nombre es " + nombre + "</h1>")
}

/* Confirm */
function confirmar() {
    var respuesta = confirm("¿Esta seguro que desea eliminar el archivo?");

    if (respuesta == true) {
        alert("Archivo eliminado correctamente")
    } else {
        alert("Archivo NO eliminado");
    }
}

/* Consola */
function consola() {
    console.log("Soy tu mejor amigo para los errores");
}

/* DOM */

var imagen = document.getElementById("imagen");

imagen.addEventListener("click", () => {
    /*alert("Soy el DOM");*/
    /* Modificamos el CSS */
    imagen.style.width = "1000px"
    imagen.style.border = "5px solid red"
})

/* Mouse */

var box = document.getElementById("box");

/*document.getElementById("box").addEventListener("mouseenter",()=>){
    box.classList.replace("box", "cambio1")
})*/

box.addEventListener("mouseenter", () => {
    box.classList.replace("box", "cambio1")
})

box.addEventListener("mouseleave", () => {
    box.classList.replace("cambio1", "box")
})
/*Para ponerlo se debe cambiar el mouseenter por mouseleave y despues cambiar el orden del parametro*/

/* Cuando muevo el mouse */
box.addEventListener("mousemove", () => {
    console.log("El mouse se esta moviendo")
})

box.addEventListener("mousedown", () => {
    console.log("Has dado click dentro del div")
})

box.addEventListener("mouseup", () => {
    console.log("Has levantado el click dentro del div")
})

/* Teclado */

var teclado = document.getElementById("teclado");

/*teclado.addEventListener("keydown", () => {
    console.log("Has oprimido una tecla")
})

teclado.addEventListener("keypress", () => {
    console.log("Tienes una tecla sostenida")
})*/

teclado.addEventListener("keyup", (e) => {
    console.log(e.key)
    /*if (e.key == "w" || e.key=="W") {
        alert("Vas hacia adelante")
    } para poder usar mayusculas y minisculas sin tener que combertirlo a minuscula*/

    if (e.key.toLowerCase() == "w") {
        alert("Vas hacia adelante")
    }
})

/* Objeto evento */

var padre = document.getElementById("padre");

padre.addEventListener("click", (e) => {
    console.log(e.target.textContent)
    /* e.target.style.background="red" */

    e.target.classList.add("color")
})

/* CREAR ELEMENTOS DENTRO DE UN NODO O ETIQUETA */

var lista = document.getElementById("lista");
var agregar = document.getElementById("agregar")

agregar.addEventListener("click", () => {
    var texto = document.getElementById("texto").value;
    /* Me trae el texto o informacion ingresado dentro del input */

    var etiqueta = document.createElement("li");
    /* CREO LA ETIQUETA */

    etiqueta.textContent = texto;
    /* ASIGNAMOS EL VALOR.DENTRO DE LA ETIQUE INSERTO EL TEXTO QUE TIENE EL INPUT */

    lista.appendChild(etiqueta)
    /* AGREGAMOS LA ETIQUETA A LA LISTA O NODO */

})