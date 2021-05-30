window.addEventListener('scroll', () => {
    if(window.scrollY >= 0 && window.scrollY < sections[1].offsetTop - 300) {
        menuListFixed[0].classList.add('-active');
        menuListFixed[1].classList.remove('-active');
        menuListFixed[2].classList.remove('-active');
        menuListFixed[3].classList.remove('-active');
    } else if(window.scrollY > sections[1].offsetTop - 300 && window.scrollY < sections[2].offsetTop - 300) {
        menuListFixed[0].classList.remove('-active');
        menuListFixed[1].classList.add('-active');
        menuListFixed[2].classList.remove('-active');
        menuListFixed[3].classList.remove('-active');
    } else if(window.scrollY > sections[2].offsetTop - 300 && window.scrollY < sections[3].offsetTop - 300) {
        menuListFixed[0].classList.remove('-active');
        menuListFixed[1].classList.remove('-active');
        menuListFixed[2].classList.add('-active');
        menuListFixed[3].classList.remove('-active');
    } else {
        menuListFixed[0].classList.remove('-active');
        menuListFixed[1].classList.remove('-active');
        menuListFixed[2].classList.remove('-active');
        menuListFixed[3].classList.add('-active');
    }
})