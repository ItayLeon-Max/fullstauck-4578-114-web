export const getStudentByName = (name) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        [
          {
            id: 1147758,
            name: "Stokes Hogan",
            email: "stokeshogan@mantro.com"
          },
          {
            id: 3304537,
            name: "Norma Terrell",
            email: "normaterrell@mantro.com"
          },
          {
            id: 1564729,
            name: "Salas Anthony",
            email: "salasanthony@mantro.com"
          },
          {
            id: 969280,
            name: "Clayton Holder",
            email: "claytonholder@mantro.com"
          },
          {
            id: 926735,
            name: "Hatfield Sanders",
            email: "hatfieldsanders@mantro.com"
          },
          {
            id: 2744564,
            name: "Estelle Valentine",
            email: "estellevalentine@mantro.com"
          },
          {
            id: 2749860,
            name: "Howard Nicholson",
            email: "howardnicholson@mantro.com"
          },
          {
            id: 77485,
            name: "Hunt Reeves",
            email: "huntreeves@mantro.com"
          },
          {
            id: 1330673,
            name: "Lawson Le",
            email: "lawsonle@mantro.com"
          },
          {
            id: 3235822,
            name: "Baldwin Buck",
            email: "baldwinbuck@mantro.com"
          }
        ].find((x) => x.name === name)
      );
    }, 500);
  });

export const getStudentsGradesById = (id) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        [
          {
            id: 1147758,
            grades: [68, 89, 47, 56, 97]
          },
          {
            id: 3304537,
            grades: [68, 60, 73, 91, 40]
          },
          {
            id: 1564729,
            grades: [66, 40, 68, 62, 54]
          },
          {
            id: 969280,
            grades: [57, 86, 99, 85, 68]
          },
          {
            id: 926735,
            grades: [50, 70, 51, 82, 79]
          },
          {
            id: 2744564,
            grades: [76, 76, 62, 75, 83]
          },
          {
            id: 2749860,
            grades: [85, 89, 51, 59, 51]
          },
          {
            id: 77485,
            grades: [71, 53, 70, 94, 51]
          },
          {
            id: 1330673,
            grades: [48, 69, 44, 96, 83]
          },
          {
            id: 3235822,
            grades: [62, 93, 76, 82, 47]
          }
        ].find((x) => x.id === id)
      );
    }, 500);
  });
