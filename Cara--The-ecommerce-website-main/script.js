const barButton = document.getElementById('bar');
const nav = document.querySelector('.navbar');

if (barButton) {
    barButton.addEventListener("click", () => {
        nav.classList.add('active');
    })
}
const closeNavBarButton = document.getElementById('close');
if (closeNavBarButton) {
    closeNavBarButton.addEventListener('click', () => {
        nav.classList.remove('active');

    })
}
