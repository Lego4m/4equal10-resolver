interface combinateParams {
  numbers: string[],
  operations: boolean[],
  parenthesis: boolean;
}

type getCombinationParams = {
  numbers: string[],
  operations: boolean[],
  hasParenthesis: boolean,
}

type combinationsObject = {
  numbers: string[][],
  operations: string[][],
  parenthesis: string[][],
}

function combinate(data: combinateParams) {
  const { numbers, operations, parenthesis } = getCombinations({
    numbers: data.numbers,
    operations: data.operations,
    hasParenthesis: data.parenthesis,
  });

  return combinateNumbersOperationsAndParenthesis({
    numbers,
    operations,
    parenthesis,
  });
};

function getCombinations({ 
  numbers, operations, hasParenthesis
}: getCombinationParams
): combinationsObject {
  function getOperationByIndex(index: number) {
    const operations = ['+', '-', '*', '/'];
  
    return operations[index];
  }

  const numbersCombinations = createCombinations(numbers, 4);

  const operationsCombinations = createCombinations(
    operations
      .map((operation, index) => operation ? getOperationByIndex(index) : '')
      .filter((operation) => operation !== ''),
    3,
    false
  );

  const parenthesisCombination = createCombinations(['(', '', '', ')'], 4)
    .filter((sequence) => { // Rules of math
      if (sequence[0] === '(' && sequence[sequence.length - 1] === ')') {
        return false;
      }

      let rightParentesisPosition = -1;

      for (let i = 0; i <= sequence.length - 1; i++) {
        if (sequence[i] === ')') {
          rightParentesisPosition = i;
        }
  
        if (rightParentesisPosition >= 0 && (sequence[i] === '(' && i > rightParentesisPosition)) {
          return false;
        }
      }

      return true;
    })
    .map((sequence) => JSON.stringify(sequence))
    .reduce<string[]>((a, b) => {
      if (a.indexOf(b) < 0) a.push(b);
      return a;
    }, [])
    .map((sequence) => JSON.parse(sequence));

  return {
    numbers: numbersCombinations,
    operations: operationsCombinations,
    parenthesis: hasParenthesis ? parenthesisCombination : [],
  }
}

function createCombinations(arr: string[], size: number, unique = true) {
  const arrayWithKeys = arr.map((item, index) => ({ key: index, value: item }));

  function iter(parts: Array<{ key: number, value: string }>) {
    return function (v: { key: number, value: string }) {
      const temp = parts.concat(v);
      if (parts.some((e) => e.key === v.key) && unique) {
        return;
      }

      if (temp.length === size) {
        result.push(temp.map((item) => item.value));
        return;
      }

      arrayWithKeys.forEach(iter(temp));
    }
  }

  const result: string[][] = [];
  arrayWithKeys.forEach(iter([]));
  return result;
}

function combinateNumbersOperationsAndParenthesis({
  numbers, operations, parenthesis
}: combinationsObject) {
  const numbersWithOperations = numbers.map((number) => {
    const combinations: string[][] = [];

    operations.forEach((operatorSequence) => {
      const newNumber = [...number];

      operatorSequence.forEach((operator, index) => {
        newNumber.splice(index * 2 - 1, 0, operator);
      });

      combinations.push(newNumber);
    });

    return combinations;
  });

  const numberAndOperationsWithParenthesis = numbersWithOperations.map((number) => {
    const combinations = [...number];

    parenthesis.forEach((parenthesisSequence) => {
      number.forEach((numberCombinationSequence) => {
        const newNumberCombinationSequence = [...numberCombinationSequence];

        parenthesisSequence.forEach((item, index) => {
          if (item === '') return;

          newNumberCombinationSequence.splice(
            index * 2 + (item === ')' ? 2 : 0), 
            0, 
            item
          );
        });

        combinations.push(newNumberCombinationSequence);
      });
    });

    return combinations;
  });

  return numberAndOperationsWithParenthesis;
}

export { combinate };
