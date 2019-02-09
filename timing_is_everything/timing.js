// const readline = require('readline');

// const reader = readline.createInterface({
//   // it's okay if this part is magic; it just says that we want to
//   // 1. output the prompt to the standard output (console)
//   // 2. read input from the standard input (again, console)

//   input: process.stdin,
//   output: process.stdout
// });

class Clock {
  constructor() {
    // 1. Create a Date object.
    let date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.  
    let tick = this._tick.bind(this);
    setInterval(tick, 1000);

  }
      
  printTime() {
    // Format the time in HH:MM:SS
    const time_string = `${this.hours}:${this.minutes}:${this.seconds}`;
    // Use console.log to print it.
    console.log(time_string);
  }
   
  _tick() {
    console.log("I work");
    // 1. Increment the time by one second.
    let totalSeconds = (this.hours * 60 * 60) + (this.minutes * 60) + (this.seconds);
    totalSeconds += 1;

    const newHours = Math.floor(totalSeconds / 3600);
    const newMinutes = Math.floor((totalSeconds % 3600) / 60);
    const newSeconds = (totalSeconds % 3600) % 60;

    this.hours = newHours;
    this.minutes = newMinutes;
    this.seconds = newSeconds;
    // 2. Call printTime.
    this.printTime();
  }
}

// const clock = new Clock();


