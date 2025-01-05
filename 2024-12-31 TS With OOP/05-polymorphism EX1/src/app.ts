import Logger from "./logger.js";
import AlertLogger from "./alert-logger.js";
import ConsoleLogger from "./console-logger.js";

function getLogger(name:string):Logger{
    if(name === 'alert')return new AlertLogger();
    else if(name === 'console')return new ConsoleLogger();
    else throw new Error('Logger type not found');
}

getLogger('alert').log('This is an alert message');
getLogger('console').log('This is a console message');
getLogger('file').log('This is a file message');

