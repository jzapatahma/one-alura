var urlPagina;
function llamarDesafio(urlPagina) {
    window.open('http://'+urlPagina, "_self");
}

const menu = document.querySelector("#id-menu");
const menu_abrir = document.querySelector("#id-abrir-menu");
const menu_cerrar = document.querySelector("#id-cerrar-menu");

menu_abrir.addEventListener("click",() => {
    menu.classList.add("visible");
})

menu_cerrar.addEventListener("click",() => {
    menu.classList.remove("visible");
})

// Function(getComputedStyle(document.documentElement)?.getPropertyValue("--script"))();