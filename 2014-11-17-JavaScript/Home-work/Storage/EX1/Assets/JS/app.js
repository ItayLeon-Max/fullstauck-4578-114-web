const saveBtn = () => {
    const address = {
        city: document.getElementById('city').value,
        street: document.getElementById('street').value,
        homeNumber: document.getElementById('homeNumber').value,
        zipCode: document.getElementById('zipCode').value
    }
    const addressToJSON = JSON.stringify(address);
    localStorage.setItem('address', addressToJSON);
}

const loadBtn = () => {
    const address = JSON.parse(localStorage.getItem('address'));
    document.getElementById('city').value = address.city;
    document.getElementById('street').value = address.street;
    document.getElementById('homeNumber').value = address.homeNumber;
    document.getElementById('zipCode').value = address.zipCode;
}
