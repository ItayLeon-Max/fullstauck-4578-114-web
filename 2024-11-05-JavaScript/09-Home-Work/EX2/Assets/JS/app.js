let companyEmployee = {
    name: 'Itay',
    lastName: 'Leon',
    salary: 100000,
    email: "itayleonconceot14@gmail.com",
    phoneNumber: "054-2334719"
};

// output with for loop
for(let i = 0 ; i < 1 ; i++){
    document.write(`<h1>Employee ${i+1}</h1>`);
    document.write(`<p>Name: ${companyEmployee.name}</p>`);
    document.write(`<p>Last Name: ${companyEmployee.lastName}</p>`);
    document.write(`<p>Salary: ${companyEmployee.salary}</p>`);
    document.write(`<p>Email: ${companyEmployee.email}</p>`);
    document.write(`<p>Phone Number: ${companyEmployee.phoneNumber}</p>`);
}

document.write('<hr>');

// output with for in loop
for(let key in companyEmployee){
    document.write(`<p>${key}: ${companyEmployee[key]}</p>`);
}

