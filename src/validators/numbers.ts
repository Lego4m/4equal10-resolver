export function validateNumbers(numbers: string[]) {
  const validation = numbers.map((number) => {
    return !Number.isNaN(parseInt(number));
  })

  return !validation.some((isNumber) => !isNumber);
}
