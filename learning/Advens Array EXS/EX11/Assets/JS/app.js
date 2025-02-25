const arr = [
  {
    name: "Best Whitehead",
    gender: "male",
    age: 33
  },
  {
    name: "Bettie Moses",
    gender: "female",
    age: 22
  },
  {
    name: "Enid Holland",
    gender: "female",
    age: 33
  },
  {
    name: "Alvarez Rios",
    gender: "male",
    age: 23
  },
  {
    name: "Rose Burt",
    gender: "male",
    age: 25
  },
  {
    name: "Robbie Sosa",
    gender: "female",
    age: 31
  },
  {
    name: "Wilkins Day",
    gender: "male",
    age: 30
  },
  {
    name: "Pierce Carter",
    gender: "male",
    age: 21
  },
  {
    name: "Sawyer Collier",
    gender: "male",
    age: 36
  },
  {
    name: "Frank Johns",
    gender: "male",
    age: 35
  }
];

const names = arr
.filter(arr => arr.age >= 34)
.filter(arr => arr.gender === "male")
.map(arr => arr.name);