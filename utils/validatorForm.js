"use strict";
function validatorForm(formInputs) {
    const output = [];
    for (const input of formInputs) {
        const { inputName, inputType, inputValue } = input;
        const switchValidator = {
            text: ValidatorInput.text(inputValue),
            email: (text) => true,
            password: (text) => true,
            number: (text) => true,
        };
        output.push({
            isValid: switchValidator[inputType] ?? true,
            inputName: inputName,
            inputType: inputType,
            inputValue: inputValue,
        });
    }
    ;
    return output;
}
;
