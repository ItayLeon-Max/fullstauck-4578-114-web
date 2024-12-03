const showVat = event => {
    event.preventDefault();
    const price = +document.getElementById('price').value;
    try {
        const vat = getVat(price);
        console.log(`the vat for ${price} is ${vat}`);
    } catch (error) {
        alert(error.message);
    }
}

const getVat = (price) => {
    if(!price) throw new Error('price is required');
    if(price < 0) throw new Error('price must be a positive number');
    return price * 0.17
};