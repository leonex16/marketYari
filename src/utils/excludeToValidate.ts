function excludeToValidate(inputToExclude: string[]): string {
  const namesInputsToExclude: string[] = ['name', 'thumbnail', 'links'];
  const [inputName, inputType] = inputToExclude;

  return namesInputsToExclude.includes(inputName)
    ? ''
    : inputToExclude[1];
};