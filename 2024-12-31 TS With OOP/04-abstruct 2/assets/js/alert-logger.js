import Logger from './logger.js';
export default class alertLogger extends Logger {
    log(message) {
        alert(message);
    }
}
