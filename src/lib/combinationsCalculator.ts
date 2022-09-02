function calculate(combinations: string[][][], shouldReturnNumber: number) {
  const numbersEqualToShouldReturn: string[][] = []

  combinations.forEach((number) => {
    number.forEach((numberCombinationSequence) => {
      const sequenceString = numberCombinationSequence.join('');

      const solution = eval(sequenceString);

      if (solution === shouldReturnNumber) {
        numbersEqualToShouldReturn.push(numberCombinationSequence);
      }
    });
  });

  return numbersEqualToShouldReturn;
}

export { calculate }
