const menuList = document.querySelectorAll('.main-header .list-menu .list');
const knowledges = menuList[0];
const projects = menuList[1];
const contact = menuList[2];

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
        top: 760,
        left: 0,
        behavior: 'smooth'
    });
})