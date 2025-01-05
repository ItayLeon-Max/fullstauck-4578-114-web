import Animal from './animal.js';
//use singletons class
class AnimalsService {
   getAnimalsFromDatabase(): Animal[] {
    return [new Animal(5), new Animal(5), new Animal(2)];
   }
    
}

const animalsService = new AnimalsService();
export default animalsService;