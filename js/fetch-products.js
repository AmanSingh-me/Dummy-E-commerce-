function createProductUrl(PRODUCT) {
    const { id, name, price } = PRODUCT;
    console.log(id, name, price)
}

createProductUrl({ id: '2', name: 'iphone', stock:58, price: '549' })