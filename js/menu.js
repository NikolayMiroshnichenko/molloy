const openMenuBtn = document.querySelector(".js-menu-btn");
const menu = document.querySelector('.js-menu');


openMenuBtn.addEventListener('click', () => {
    menu.classList.add('active');
});

menu.addEventListener('click', e => {
    const dataSet = e.target.dataset.close;
    const nodeName = e.target.nodeName;

    if (dataSet === 'close-menu' || nodeName === "A") {
        menu.classList.remove('active');
    }
});