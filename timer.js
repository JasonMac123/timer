const args = process.argv.slice(2);

const alarm = (data) => {
  if (data.length === 0) {
    return;
  }
  const onlyNumbers = data.filter(datapoint => datapoint >= 0);
  const numberSorted = onlyNumbers.sort((a, b) => (a - b));
  for (const number of numberSorted) {
    let timerLength = number * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timerLength);
  }
};

alarm(args);