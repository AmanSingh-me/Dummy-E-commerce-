const createElement = (ELEM_NAME) => document.createElement(ELEM_NAME);

export function cartProduct_Template() {
    // NOTE: _(underscore) ==> child relation (inside) 
    //       $ ==> more than 1 (reusable)

    let [PRODUCT_NAME, PRODUCT_PRICE, PRODUCT_SELLER, PRODUCT_DELIVERY_DETAILS, PRICE_SYMBOL, IMG_URL] = ['Iphone 14 Pro Max', 150_000, 'XYZ Group', '27 Oct 22', '₹' ,'./11.jpg'];


    let li = createElement('li'); // main parent
    li.classList.add('product-wrapper');

    // first child
    let div_1 = createElement('div');
    div_1.classList.add('product');

    let classLists = ['image-container', 'product-details', 'product-delivery-details'];
    const classList_Length = classLists.length;

    let div_1_Childs = [];

    for (let i = 0; i < classList_Length; i++) {
        let div_1_$ = createElement('div'); // reusable div

        switch (i) {
            case 0: div_1_$.classList.add(classLists[i]);

                let img = createElement('img');
                img.classList.add('product-image');
                img.setAttribute('src', IMG_URL);
                img.setAttribute('alt', PRODUCT_NAME)
                div_1_$.append(img);

                break;

            case 1: div_1_$.classList.add(classLists[i]);

                let h4 = createElement('h4');
                h4.classList.add('product-name');
                h4.textContent = PRODUCT_NAME;

                let p1 = createElement('p');
                p1.classList.add('product-price');
                p1.setAttribute('price-symbol', PRICE_SYMBOL);
                p1.textContent = PRODUCT_PRICE;

                let p2 = createElement('p');
                p2.classList.add('product-seller');
                p2.textContent = PRODUCT_SELLER;

                div_1_$.append(h4, p1, p2);

                break;

            case 2: div_1_$.classList.add(classLists[i]);
                div_1_$.textContent = PRODUCT_DELIVERY_DETAILS;
        }

        div_1_Childs.push(div_1_$);
    }

    div_1.append(...div_1_Childs); // appending all child 1 of/in li


    //second child
    let div_2 = createElement('div');

    let div_2_1 = createElement('div');
    div_2_1.classList.add('product-quantity');

    let inputNum = createElement('input');
    let inputNum_Attr = [{ type: 'number' }, { min: 1 }, { max: 5 }, { value: 2 }, { readonly: '' }];
    let inputNum_Attr_Length = inputNum_Attr.length;

    for (let i = 0; i < inputNum_Attr_Length; i++) { // set Attribute in input element
        let key = Object.keys(inputNum_Attr[i])[0];  
        inputNum.setAttribute(key, inputNum_Attr[i][key]);
    }

    let span1 = createElement('span');
    span1.classList.add('decrease-quantity');
    span1.textContent = '−';

    let span2 = createElement('span');
    span2.classList.add('increase-quantity');
    span2.textContent = '+';

    div_2_1.append(span1, inputNum, span2);



    let div_2_2 = createElement('div');

    let div1 = createElement('div');
    div1.classList.add('product-on-hold');
    div1.textContent = 'SAVE FOR LATER';

    let div2 = createElement('div');
    div2.classList.add('remove-product');
    div2.textContent = 'REMOVE';

    div_2_2.append(div1, div2);


    div_2.append(div_2_1, div_2_2); // appending all child 2 of/in li

    li.append(div_1, div_2); // final appending in parent
    return li
}