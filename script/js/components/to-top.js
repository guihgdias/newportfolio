const button = document.querySelector('.button-top');

function showButton() {
    if(window.scrollY > 750) {
        button.style = 'display: flex';
    } else {
        button.style = 'display: none';
    }
}

window.addEventListener('scroll', showButton);

button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
})