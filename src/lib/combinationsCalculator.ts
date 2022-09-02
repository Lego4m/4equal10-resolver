function calculate(combinations: string[][][], shouldReturnNumber: number) {
  const numbersEqualToShouldReturn: string[][] = []

  combinations
    .map((sequence) => JSON.stringify(sequence))
    .reduce<string[]>((a, b) => {
      if (a.indexOf(b) < 0) a.push(b);
      return a;
    }, [])
    .map((sequence) => JSON.parse(sequence) as string[][]) // remove duplicates

    .forEach((number) => {
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
