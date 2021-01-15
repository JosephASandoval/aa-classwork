class Clock {
    constructor() {
        let timeNow = new Date();
        this.hours = timeNow.getHours();
        this.minutes = timeNow.getMinutes();
        this.seconds = timeNow.getSeconds();

        this.printTime();
        

        setInterval(this._tick.bind(this), 1000);
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
        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes += 1;
            if (this.minutes === 60) {
                this.minutes = 0;
                this.hours = (this.hours + 1) % 24;
            }
        }
        // console.log(this);
        this.printTime();
        
        // 1. Increment the time by one second.
        // 2. Call printTime.
    }
}

const clock = new Clock();

// console.log(clock.printTime());



