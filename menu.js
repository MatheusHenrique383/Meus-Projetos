// Obtém os elementos
const btnMenu = document.getElementById("btn-menu");
const menuMobile = document.getElementById("menu-mobile");
const btnFechar = document.getElementById("overlay-menuu");

// Abre o menu quando o botão de abrir for clicado
btnMenu.addEventListener("click", () => {
  menuMobile.classList.add("abrir-menu");
});

// Fecha o menu quando o botão de fechar for clicado
menuMobile.addEventListener("click", () => {
    menuMobile.classList.remove("abrir-menu");
});

overlay.addEventListener('click' , () =>{
    menuMobile.classList.remove(abrir-menu)
}

)
