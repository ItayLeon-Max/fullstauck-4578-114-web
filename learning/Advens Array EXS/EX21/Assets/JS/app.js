let numberOrAnother = numberOrAnother => {
  if(typeof numberOrAnother !== 'number') return `n/a`;
  else if(numberOrAnother % 2 === 0) return true;
  else return false;
}

console.log(numberOrAnother(15)); 