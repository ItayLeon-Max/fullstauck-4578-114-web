let num = +prompt('Enter a number');
while(num !== 0){
  alert(num % 7 ===7 ? 'Boom' : num);
  num = +prompt('Enter a number');
}