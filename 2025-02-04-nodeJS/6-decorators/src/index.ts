function Mammal(target: any): any{
    return class extends target {
        birthDate: Date = new Date();
    }
}

function Min(value: number) {
    return function(target: any, propertyKey: string) {
        let _value: number;

        Object.defineProperty(target, propertyKey, {
            get: () => _value,
            set: (newValue: number) => {
                if (newValue < value) {
                    throw new Error('Value is too low');
                }
                _value = newValue;
            }
        });
    }
}


class Animal {

}

@Mammal
class Lion extends Animal {

    @Min(100)
    weight: number;

    constructor(weight: number) {
        super();
        this.weight = weight;
    }

    sayHallo() {
        console.log('Hallo');
    }
}

const Simba = new Lion(200);
console.log((Simba as any).birthDate)

Simba.weight = 50; // Error: Value is too low
console.log(Simba.weight);