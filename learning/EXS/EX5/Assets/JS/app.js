const myObj = {
    javascript:
    { 
      destructing: {
        is: "awesome" 
      }
    }
  };

const {javascript: {destructing: {is}}} = myObj;
console.log(is); 