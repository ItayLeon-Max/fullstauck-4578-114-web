function getMap({cordination: {x, y}}) {
  console.log(x, y);
}

const location = {
  cordination: {
    x: 100,
    y: 200
  }
};
getMap(location);