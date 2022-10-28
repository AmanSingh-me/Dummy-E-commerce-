import { cartProduct_Template } from "./cart-Product-Template.js";

const get_CartItems = (ITEM) => {
    let products = JSON.parse(localStorage.getItem(ITEM));

    if (products === null) {
        return ({ ok: false, value: 'Cart is Empty' }, emptyCart())
    } else {
        return { ok: true, value: products }
    }
}

function emptyCart() {
    let parent_Elem = document.querySelector('.cart-details');
    parent_Elem.textContent = 'Cart is Empty';
    let section = parent_Elem.parentElement;
    section.style.height = '85vh';

}