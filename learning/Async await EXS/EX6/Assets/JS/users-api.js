export const getUsers = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            name: "Selma Lucas",
            gender: "female",
            age: 31
          },
          {
            name: "Dionne Weaver",
            gender: "female",
            age: 34
          },
          {
            name: "Paulette Berg",
            gender: "female",
            age: 29
          },
          {
            name: "Jessie Melendez",
            gender: "female",
            age: 28
          },
          {
            name: "Hunter Beach",
            gender: "male",
            age: 26
          },
          {
            name: "Amie Pruitt",
            gender: "female",
            age: 25
          },
          {
            name: "Fletcher Mckinney",
            gender: "male",
            age: 24
          },
          {
            name: "Pennington Fischer",
            gender: "male",
            age: 33
          },
          {
            name: "Parker Atkinson",
            gender: "male",
            age: 23
          },
          {
            name: "Harper Bishop",
            gender: "male",
            age: 29
          }
        ]);
      }, 500);
    });