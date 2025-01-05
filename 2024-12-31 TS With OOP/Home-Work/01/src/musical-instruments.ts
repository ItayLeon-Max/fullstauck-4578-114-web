export default abstract class MusicalInstrument {
    public constructor(
        protected model: string,
        protected manufacturer: string,
        protected color: string
    ){}

    abstract display(): void;
    abstract makeSound(): void;
}