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

const mainImage = document.getElementById('main_image');

// All 4 small image 
const smallImage1 = document.getElementById('small_image1');
const smallImage2 = document.getElementById('small_image2');
const smallImage3 = document.getElementById('small_image3');
const smallImage4 = document.getElementById('small_image4');

function changeImage(smallImage) {
    if (smallImage) {
        smallImage.addEventListener("click", () => {
            const change = mainImage.src;
            mainImage.src = smallImage.src;
            smallImage.src = change;
        });
    }
}

changeImage(smallImage1);
changeImage(smallImage2);
changeImage(smallImage3);
changeImage(smallImage4);