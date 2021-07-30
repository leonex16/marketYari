function validatorForm(formInputs: ValidatorFormIn[]): ValidatorFormOut[] {
  const output: ValidatorFormOut[] = [];

  for (const input of formInputs) {
    const {inputName, inputType, inputValue}  = input;

    const switchValidator: any = {
      text: ValidatorInput.text(inputValue),
      email: (text: string): boolean => true,
      password: (text: string): boolean => true,
      number: (text: string): boolean => true,
    };
    
    output.push({
      isValid: switchValidator[inputType] ?? true,
      inputName: inputName,
      inputType:  inputType,
      inputValue: inputValue,
    });
    
  };
   
  return output;
};