const fixedHeader = document.querySelector('.fixed-header');

window.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        fixedHeader.style = 'z-index: 999; opacity: 1';
    } else {
        fixedHeader.style = 'z-index: -1; opacity 0';
    }
})

const menuListFixed = document.querySelectorAll('.fixed-header .list-menu .list .anchor');
const homeFixed = menuListFixed[0];
const knowledgesFixed = menuListFixed[1];
const projectsFixed = menuListFixed[2];
const contactFixed = menuListFixed[3];

console.log(menuListFixed)

homeFixed.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})

knowledgesFixed.addEventListener('click', () => {
    window.scrollTo({
        top: 760,
        left: 0,
        behavior: 'smooth'
    });
})

projectsFixed.addEventListener('click', () => {
    window.scrollTo({
        top: 1720,
        left: 0,
        behavior: 'smooth'
    });
})

contactFixed.addEventListener('click', () => {
    window.scrollTo({
        top: 2670,
        left: 0,
        behavior: 'smooth'
    });
})