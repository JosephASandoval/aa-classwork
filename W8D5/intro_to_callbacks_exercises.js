class Clock {
    constructor() {
        let timeNow = new Date();
        this.hours = timeNow.getHours();
        this.minutes = timeNow.getMinutes();
        this.seconds = timeNow.getSeconds();

        let time = printTime();
        this.time;

        setInterval(this._tick, 1000);
        // 1. Create a Date object.
        // 2. Store the hours, minutes, and seconds.
        // 3. Call printTime.
        // 4. Schedule the tick at 1 second intervals.
    }

    printTime() {
        let timeString = (this.hours + ":" + this.minutes + ":" + this.seconds);
        console.log(timeString);
        // Format the time in HH:MM:SS
        // Use console.log to print it.
    }

    _tick() {
        
        // 1. Increment the time by one second.
        // 2. Call printTime.
    }
}

const clock = new Clock();

console.log("Hi");

console.log(new Date());

