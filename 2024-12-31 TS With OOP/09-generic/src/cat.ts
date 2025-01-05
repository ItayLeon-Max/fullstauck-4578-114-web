import Animal from "./animal.js";

export default interface Cat extends Animal {
    numberOfSouls: number,
    name: string,
    weight: number
}