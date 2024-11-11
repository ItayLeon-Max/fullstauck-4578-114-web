const myObj = {
    garageType: "audi",
    cars: {
      fixed: ["a1", "a3", "q5", "a6"],
      notFixed: ["a8", "q7"]
    }
  };

const {cars: {notFixed}} = myObj;
console.log(notFixed);