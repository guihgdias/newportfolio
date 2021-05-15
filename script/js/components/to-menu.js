const menuList = document.querySelectorAll('.main-header .list-menu .list');
const home = menuList[0];
const knowledges = menuList[1];
const projects = menuList[2];
const contact = menuList[3];

knowledges.addEventListener('click', () => {
    window.scrollTo({
        top: 760,
        left: 0,
        behavior: 'smooth'
    });
})

projects.addEventListener('click', () => {
    window.scrollTo({
        top: 1720,
        left: 0,
        behavior: 'smooth'
    });
})

contact.addEventListener('click', () => {
    window.scrollTo({
        top: 2670,
        left: 0,
        behavior: 'smooth'
    });
})