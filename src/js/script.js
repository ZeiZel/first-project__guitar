
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const menuItem = document.querySelectorAll('.nav-menu__list-item')


hamburger.addEventListener('click', (e) => {
    hamburger.classList.toggle('hamburger_active')
    navMenu.classList.toggle('nav-menu_active')
})

menuItem.forEach((item) => {
    item.addEventListener('click', (e) => {
        hamburger.classList.toggle('hamburger_active')
        navMenu.classList.toggle('nav-menu_active')
    })
})


$(document).ready(function(){
    $("a[href*='#']").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
});

