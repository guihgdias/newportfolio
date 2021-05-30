const fixedHeader = document.querySelector('.fixed-header');
const menuListFixed = document.querySelectorAll('.fixed-header .list-menu .list .anchor');

window.addEventListener('scroll', () => {
    if(window.scrollY > 300) {
        fixedHeader.style = 'z-index: 999; opacity: 1';
    } else {
        fixedHeader.style = 'z-index: -1; opacity 0';
    }
})

menuListFixed[0].addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

menuListFixed[1].addEventListener('click', () => {
    window.scrollTo({
        top: sections[1].offsetTop,
        behavior: 'smooth'
    });
})

menuListFixed[2].addEventListener('click', () => {
    window.scrollTo({
        top: sections[2].offsetTop,
        behavior: 'smooth'
    });
})

menuListFixed[3].addEventListener('click', () => {
    window.scrollTo({
        top: sections[3].offsetTop,
        behavior: 'smooth'
    });
})