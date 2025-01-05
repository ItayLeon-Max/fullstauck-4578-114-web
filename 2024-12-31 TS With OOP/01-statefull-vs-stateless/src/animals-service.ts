import Animal from './animal.js';
//use singletons class
export default class AnimalsService {
    private static instance = new AnimalsService;
    private constructor() {}
    static getInstance() {
        return this.instance;
    }
    
}