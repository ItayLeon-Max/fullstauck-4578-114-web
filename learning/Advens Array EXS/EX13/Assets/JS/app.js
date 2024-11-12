let foo = ['name', 'param1', 2, 'city', undefined];
foo = foo.filter(el => {
  const type = typeof el;
  if(typeof el === 'string') {
    return true;
  } else {
    return false;
  }
});

console.log(foo);