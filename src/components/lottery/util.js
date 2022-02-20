export const drawNumbers = (config) => {
  if (!config || !config.startNumber || !config.endNumber || !config.numbersPerTicket) {
    return [];
  }

  let allNumbers = [];
  for (var index = config.startNumber; index <= config.endNumber; index++) {
    allNumbers.push(index);
  }

  let remainingNumbers = allNumbers;
  let drawnNumbers = [];

  while (drawnNumbers.length < config.numbersPerTicket) {
    let newIndexDraw = Math.floor(Math.random() * remainingNumbers.length);
    let drawnNumber = remainingNumbers[newIndexDraw];

    drawnNumbers.push(drawnNumber);
    remainingNumbers = remainingNumbers.filter(
      (value) => value !== drawnNumber
    );
  }

  return drawnNumbers;
};