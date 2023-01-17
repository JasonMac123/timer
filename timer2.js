const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
const numbers = ["1","2","3","4","5","6","7","8","9"];

stdin.on('data', (key) => {
  if (key === "b") {
    process.stdout.write('.');
  }
  if (numbers.includes(key)) {
    setTimeout(() => {
      process.stdout.write('.');
    }, (parseInt(key) * 1000));
  }
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
});

console.log('after callback');