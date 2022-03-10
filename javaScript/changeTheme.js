const head = document.getElementById("head");
const href = location.href.replace("index.html", "").replace("#", "");
const light = href +"style/themes/theme-light.css";
const dark = href + "style/themes/theme-dark.css";

function defaultTheme () {
    if (theme == "light") {
        head.innerHTML += "<link id=\"theme\" rel=\"stylesheet\" href=" + light + ">";
    } else if (theme == "dark"){
        head.innerHTML += "<link id=\"theme\" rel=\"stylesheet\" href=" + dark + ">";
    }
}

function changeTheme () {
    if (theme == "light"){
        localStorage.setItem('Theme', 'dark');
        themeHTML.href = dark;
    } 
    else if (theme == "dark"){
        localStorage.setItem('Theme', 'light');
        themeHTML.href = light;
    }
}

defaultTheme();
const themeHTML = document.getElementById("theme");