const menuList = document.querySelectorAll('.main-header .list-menu .list .anchor');
const home = menuList[0];
const knowledges = menuList[1];
const projects = menuList[2];
const contact = menuList[3];

knowledges.addEventListener('click', () => {
    window.scrollTo({
        top: 659,
        left: 0,
        behavior: 'smooth'
    });
})

projects.addEventListener('click', () => {
    window.scrollTo({
        top: 1623,
        left: 0,
        behavior: 'smooth'
    });
})

contact.addEventListener('click', () => {
    window.scrollTo({
        top: 2266,
        left: 0,
        behavior: 'smooth'
    });
})