const user = {
  name: 'Moshe',
  surname: 'Cohen',
  address: 'Petah Tiqwa',
  VAT: 1.17,
  amount: 9784,
};

let newVAT = 1.18;
Object.keys(user).forEach((key) => {
  if (key === 'VAT'){
    user[key] = newVAT
  }
});
console.log(user);

