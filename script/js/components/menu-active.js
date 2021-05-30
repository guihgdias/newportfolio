const menus = document.querySelectorAll('.main-header .navigation .list-menu .list .anchor');
const menusFixed = document.querySelectorAll('.fixed-header .navigation .list-menu .list .anchor');

window.addEventListener('scroll', () => {
    if(window.scrollY > 0 && window.scrollY < 535) {
        menusFixed[0].classList.add('-active');
        menusFixed[1].classList.remove('-active');
        menusFixed[2].classList.remove('-active');
        menusFixed[3].classList.remove('-active');
    } else if(window.scrollY > 535 && window.scrollY < 1435) {
        menusFixed[0].classList.remove('-active');
        menusFixed[1].classList.add('-active');
        menusFixed[2].classList.remove('-active');
        menusFixed[3].classList.remove('-active');
    } else if(window.scrollY > 1435 && window.scrollY < 2135) {
        menusFixed[0].classList.remove('-active');
        menusFixed[1].classList.remove('-active');
        menusFixed[2].classList.add('-active');
        menusFixed[3].classList.remove('-active');
    } else {
        menusFixed[0].classList.remove('-active');
        menusFixed[1].classList.remove('-active');
        menusFixed[2].classList.remove('-active');
        menusFixed[3].classList.add('-active');
    }
})