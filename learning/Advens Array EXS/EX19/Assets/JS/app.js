const orders = {
  shirt: 120, // Object: value
  pants: 90,
  shoes: 90,
  boots: 343555,
};

Object.values(orders).forEach(item =>{
  console.log(item*1.23);
});
console.log(orders);

