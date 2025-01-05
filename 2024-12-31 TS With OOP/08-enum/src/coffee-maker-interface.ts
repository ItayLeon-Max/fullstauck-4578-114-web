import Maker from "./makers-enum";
import voltage from "./voltage";

export default interface CoffeeMakerInterFace {
    numberOfPremixedCups: number,
    numberOfMilkHotters: number,
    make: Maker,
    voltage: voltage
}