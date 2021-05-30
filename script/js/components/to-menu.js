const menuList = document.querySelectorAll('.main-header .list-menu .list .anchor');
const sections = document.querySelectorAll('.main-section');

menuList[1].addEventListener('click', () => {
    window.scrollTo({
        top: sections[1].offsetTop,
        behavior: 'smooth'
    });
})

menuList[2].addEventListener('click', () => {
    window.scrollTo({
        top: sections[2].offsetTop,
        behavior: 'smooth'
    });
})

menuList[3].addEventListener('click', () => {
    window.scrollTo({
        top: sections[3].offsetTop,
        behavior: 'smooth'
    });
})