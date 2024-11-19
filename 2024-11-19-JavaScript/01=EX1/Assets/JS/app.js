const addCarToTable = () => {
    const car = [{
        carName: document.getElementById("carName").value,
        carColor: document.getElementById("carColor").value,
        carURL: document.getElementById("carURL").value
    }];

    if(!car[0].carName || !car[0].carColor || !car[0].carURL) {
        const error = document.getElementById("error");
        error.innerHTML = "Please fill all the fields";
        error.style.color = "red";
    } else {
        const table = document.getElementById("carTable");
        const newRow = document.createElement("tr");

        const newCarName = document.createElement("td");
        const newCarColor = document.createElement("td");
        const newCarImageCell = document.createElement("td");
        const newCarImage = document.createElement("img");
        newCarName.innerHTML = car[0].carName;
        newCarColor.style.backgroundColor = car[0].carColor;
        
        newCarImage.src = car[0].carURL;
        newCarImage.alt = "Car Image";
        newCarImage.style.width = 100;
        newCarImage.style.height = 100;

        newCarImageCell.appendChild(newCarImage);

        newRow.appendChild(newCarName);
        newRow.appendChild(newCarColor);
        newRow.appendChild(newCarImageCell);

    }
    saveCarToStorage("cars", car[0]);
    clearDataForm();
}

const clearDataForm = () => {
    document.getElementById("carName").value = "";
    document.getElementById("carColor").value = "";
    document.getElementById("carURL").value = "";
}

const saveCarToStorage = (index, car) => {
    let cars = JSON.parse(localStorage.getItem(index)) || [];
    cars.push(car);
    localStorage.setItem(index, JSON.stringify(cars));
}

const loadCarsFromStorage = () => {
        const key = "cars";
        const cars = JSON.parse(localStorage.getItem(key));
        if (Array.isArray(cars)) {
            cars.forEach(car => {
                const table = document.getElementById("carTable");
                const newRow = document.createElement("tr");

                const newCarName = document.createElement("td");
                const newCarColor = document.createElement("td");
                const newCarImageCell = document.createElement("td");
                const newCarImage = document.createElement("img");
                newCarName.innerHTML = car.carName;
                newCarColor.style.backgroundColor = car.carColor;
                
                newCarImage.src = car.carURL;
                newCarImage.alt = "Car Image";
                newCarImage.style.width = 100;
                newCarImage.style.height = 100;

                newCarImageCell.appendChild(newCarImage);

                newRow.appendChild(newCarName);
                newRow.appendChild(newCarColor);
                newRow.appendChild(newCarImageCell);

                table.appendChild(newRow);
            });
        }

        table.appendChild(newRow);
}

loadCarsFromStorage();