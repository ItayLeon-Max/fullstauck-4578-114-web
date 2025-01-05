import Logger from './logger.js';  
export default class alertLogger extends Logger {
    
    log(message: string): void {
        alert(message);
    }
}