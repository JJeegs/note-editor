// traemos el body con el ID "head" para poder escribir en el, y la direccion de nuestro servidor restando extras como el nombre del archivo
const themeHTML = document.getElementById("theme");
const head = document.getElementById("head");
const href = location.href.replace("index.html", "").replace("#", "");

// Asignamos variables a las direcciones desde la raiz del proyecto de los css de cada tema 
const light = href +"style/themes/theme-light.css";
const dark = href + "style/themes/theme-dark.css";

// asignamos un espacio en memoria del LocalStorage
let Theme = localStorage.getItem("Theme");

// asignamos una funcion para tener un tema apenas iniciemos la pagina
function defaultTheme () {
    if (Theme) {
        themeHTML.href = light;
    } else if (Theme == false){
        themeHTML.href = dark;
    }
}

// asignamos un espacio en memoria del LocalStorage
Object.defineProperty(localStorage, "Theme", {
    value: true,
    writable: true,
})

// creamos una funcion para cambiar el tema cada vez q se presiona el boton 
function changeTheme () {
    if (Theme){
        Theme = false;
        themeHTML.href = dark;
    } 
    else if (Theme == false){
        Theme = true;
        themeHTML.href = light;
    }
}
/* function changeTheme () {
    if (theme == "light"){
        localStorage.setItem('Theme', 'dark');
        themeHTML.href = dark;
    } 
    else if (theme == "dark"){
        localStorage.setItem('Theme', 'light');
        themeHTML.href = light;
    }
} */

defaultTheme();