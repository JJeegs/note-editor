const head = document.getElementById("head");
const href = location.href.replace("index.html", "").replace("#", "");

const light = href +"style/themes/theme-light.css";
const dark = href + "style/themes/theme-dark.css";

let Theme = localStorage.getItem("Theme");

function defaultTheme () {
    if (Theme) {
        head.innerHTML += "<link id=\"theme\" rel=\"stylesheet\" href=" + light + ">";
    } else if (Theme == false){
        head.innerHTML += "<link id=\"theme\" rel=\"stylesheet\" href=" + dark + ">";
    }
}

Object.defineProperty(localStorage, "Theme", {
    value: true,
    writable: true,
})

function changeTheme () {
    if (Theme){
        localStorage.setItem('Theme', false);
        themeHTML.href = dark;
    } 
    else{
        localStorage.setItem('Theme', true);
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
const themeHTML = document.getElementById("theme");