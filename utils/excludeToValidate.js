"use strict";
function excludeToValidate(inputToExclude) {
    const namesInputsToExclude = ['name', 'thumbnail', 'links'];
    const [inputName, inputType] = inputToExclude;
    return namesInputsToExclude.includes(inputName)
        ? ''
        : inputToExclude[1];
}
;
