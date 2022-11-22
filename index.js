const footerText = document.querySelector('.footer'),
    actualYear = new Date().getFullYear(),
    menu_btn = document.querySelector('.hamburguer'),
    mobile_nav = document.querySelector('.mobile-nav'),
    picture_menu = document.querySelector('.picture'),
    logo_menu = document.querySelector('.logo'),
    menuItens = document.querySelectorAll('.nav-anchor');


for  (let i= 0; i < menuItens.length; i++){
    menuItens[i].addEventListener("click", function menuClose(){
        menu_btn.classList.toggle("is-active");
        mobile_nav.classList.toggle("is-active");
        picture_menu.classList.toggle("nav-active");
        logo_menu.classList.toggle("logo-nav-active");
    })
}


menu_btn.addEventListener('click', function menuToggle() {
    menu_btn.classList.toggle("is-active");
    mobile_nav.classList.toggle("is-active");
    picture_menu.classList.toggle("nav-active");
    logo_menu.classList.toggle("logo-nav-active");
})


footerText.innerText = `©${actualYear} Rafa Collioni
| Todos os Direitos Reservados | Feito por Rafa Collioni 💜`
image.png

