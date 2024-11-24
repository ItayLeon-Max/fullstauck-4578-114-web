const addIngredientToList = (event) => {
    event.preventDefault();
    const ingredient = [
        {
            ingredient: document.getElementById('ingredient').value,
            amount: document.getElementById('amount').value,
            groceriesList: document.getElementById('groceriesList')
        }
    ];
    for(index of ingredient) {
        if(!index.ingredient && !index.amount || index.amount < 0) {
            const errorDiv = document.getElementById('error');
            errorDiv.innerHTML = 'Please Enter Ingredient and Amount';
            errorDiv.style.color = 'red';
        } else {
            const errorDiv = document.getElementById('error');
            errorDiv.innerHTML = '';
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = `Ingredient: ${index.ingredient} , Amount: ${index.amount}`;
            index.groceriesList.appendChild(li);
        }
    }
    isAccepted();
    clearInputs();
}


const clearInputs = () => {
    ingredient.value = '';
    amount.value = '';
}

const isAccepted = () => {
    const acceptCookies = document.getElementById('acceptCookies');
    const declineCo = document.getElementById('declineCookies');
    const cookies = document.getElementById('cookies');
    acceptCookies.addEventListener('click', () => {
        cookies.style.display = 'none';
        localStorage.setItem('cookies', true);
    });
    declineCo.addEventListener('click', () => {
        cookies.style.display = 'none';
        localStorage.setItem('cookies', false);
    });
    if(localStorage.getItem('cookies') === 'true') {
        addToLocalStorage();    
    } else {
        return;
    }
}

const addToLocalStorage = () => {
    const ingredient = document.getElementById('ingredient').value;
    const amount = document.getElementById('amount').value;
    if(amount < 0) {
        return;
    } else {
        let ingredients = JSON.parse(localStorage.getItem('ingredients')) || [];
        ingredients.push({ingredient, amount});
        localStorage.setItem('ingredients', JSON.stringify(ingredients));
    }
}

const loadLocalStorage = () => {
    let ingredients = JSON.parse(localStorage.getItem('ingredients')) || [];
    const groceriesList = document.getElementById('groceriesList');
    ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `Ingredient: ${ingredient.ingredient} , Amount: ${ingredient.amount}`;
        groceriesList.appendChild(li);
    });
}
 loadLocalStorage();
