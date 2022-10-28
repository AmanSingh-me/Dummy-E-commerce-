const leftScrollIcon = document.querySelector('.product-categories img[title="scroll-left"]');
const rightScrollIcon = document.querySelector('.product-categories img[title="scroll-right"]');
const scrollableElement = document.querySelector('.product-categories');

leftScrollIcon.addEventListener('click', () => scrollBy('left'));
rightScrollIcon.addEventListener('click', () => scrollBy('right'));

scrollableElement.addEventListener('wheel', function (e) {
    // returns positive 1(scroll-down) or negative 1(scroll-up) 
    let verticalMovement = Math.sign(e.deltaY);
    if (verticalMovement === 1) {
        scrollBy('right', 200)
    } else if (verticalMovement === -1) {
        scrollBy('left', 200)
    }
    e.preventDefault();
})

function scrollBy(SCROLL_DIRECTION, SCROLL_DISTANCE = 300) {

    if (SCROLL_DIRECTION === 'left') {
        scrollableElement.scrollLeft -= SCROLL_DISTANCE;
    } else if ('right') {
        scrollableElement.scrollLeft += SCROLL_DISTANCE;
    }
}