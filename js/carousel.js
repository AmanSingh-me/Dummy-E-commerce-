const imageHolder = document.querySelector('.carousel-bg-image');
const carouselBtns = document.querySelectorAll('carousel > label img');

const images = {
    currentImg_Id: -1, // it's index of that image && default image is -1(none)

    allUrl: ['./11.jpg', './12.jpg', './13.jpg', './14.jpg', './15.jpg'],

    get nextImg_Url() {
        if (this.currentImg_Id === this.allUrl.length - 1) this.currentImg_Id = -1; // resetting forward
        let imgId = this.currentImg_Id + 1;
        this.currentImg_Id = imgId; // changes the currentImg_Id to nextImg_Id
        return this.allUrl[imgId];
    },

    get previousImg_URL() {
        if (this.currentImg_Id === 0) this.currentImg_Id = this.allUrl.length; // resetting backward
        let imgId = this.currentImg_Id - 1;
        this.currentImg_Id = imgId; // changes the currentImg_Id to nextImg_Id
        return this.allUrl[imgId];
    }
}

function changeCarousel_Img(IMG_URL) {
    imageHolder.setAttribute('style', `background-image: url("${IMG_URL}")`);
}

let interval_Id;

function autoSlider(TIME = 3000) { // Auto-Slider 
    interval_Id = setInterval(() => {
        changeCarousel_Img(images.nextImg_Url);
    }, TIME);
} autoSlider(2000)

function reset_AutoSlider() { // reset when manual btns are clicked
    clearInterval(interval_Id);
    autoSlider(2000)
}

// manual-sliders
carouselBtns[0].addEventListener('click', () => {
    changeCarousel_Img(images.previousImg_URL); reset_AutoSlider()
    reset_AutoSlider()
});

carouselBtns[1].addEventListener('click', () => {
    changeCarousel_Img(images.nextImg_Url);
    reset_AutoSlider()
});





document.addEventListener('DOMContentLoaded', () => changeCarousel_Img(images.nextImg_Url));