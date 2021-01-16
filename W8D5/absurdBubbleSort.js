var readline = require("readline");

let reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function askIfGreaterThan(el1, el2, callback) {
  reader.question("Is " + el1 + " > " + el2, (answer) => {
    let reply = answer;
      if (reply === "yes") {
        callback(true);
      } 
      else {
        callback(false);
      }
  });
}

