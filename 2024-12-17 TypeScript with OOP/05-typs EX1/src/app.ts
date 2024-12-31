document.getElementById('btn').addEventListener('click', (event) => {
    event.preventDefault();
/*
    when we use the keyword 'as'
    we are telling typescript that we are sure that the element exists
    and we are casting it to the type we want
*/
    const input = document.getElementById('input') as HTMLInputElement;
    console.log(input.value);
});

function test () {
    type Person = {
        name: string | undefined; // union type (Syntax: type1 | type2) = (string or undefined)
        middleName?: string; // optional property (Syntax: propertyName?: type) = (string or undefined)
        familyName: string;
        age: number;
        birthday: Date;
        type: string;
        eat: Function;
    }
    type Animal = {
        type: string;
        age: Function;
        eat: Function;
    }

    const toy: Animal = {
        type: "geckrasel",
        eat: () => { console.log("I'm eating"); },
        age: () => { console.log("I'm 3 years old"); }
    }


}