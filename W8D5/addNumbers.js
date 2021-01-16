var readline = require('readline');

let reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question('Whats your number?', (num) => {
      let userNum = parseInt(num);
      sum += userNum;
      console.log(sum);
      addNumbers(sum, numsLeft-1, completionCallback);
    })
  } else {
    completionCallback(sum);
    reader.close();
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


