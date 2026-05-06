const EventEmitter = require('events');

const smartHub = new EventEmitter();

const logger = (temp) => {
    console.log(`[Logger]Temperature is ${temp}°C`);
};

const conditioner = (temp) => {
    if (temp > 25) {
        console.log(`[Conditioner]It's too hot! Turning on the AC.`);
    }
};

const fireAlarm = (temp) => {
    if (temp > 60) {
        console.log(`[FireAlarm]Alert! Temperature is above 60°C! Activating fire alarm!`);
        console.log(`[FireAlarm]Deactivating AC and turning on fire suppression system.`);
        smartHub.off('temperatureChange', conditioner);
    }
};

smartHub.on('temperatureChange', logger);
smartHub.on('temperatureChange', conditioner);
smartHub.on('temperatureChange', fireAlarm);


console.log("Starting a day");

console.log("Morning:");
smartHub.emit('temperatureChange', 22);

console.log("Afternoon:");
smartHub.emit('temperatureChange', 28);

console.log("Evening:");
smartHub.emit('temperatureChange', 65);

console.log("A bit later in evening...;");
smartHub.emit('temperatureChange', 90);

