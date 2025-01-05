//use singletons class
class AnimalsService {
    constructor() { }
    static getInstance() {
        return this.instance;
    }
}
AnimalsService.instance = new AnimalsService;
export default AnimalsService;
