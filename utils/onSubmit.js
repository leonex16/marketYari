"use strict";
function onSubmit(evt) {
    evt.preventDefault();
    const $formElems = evt.target.querySelectorAll('*[id][name]');
    const $formInputs = [];
    for (let i = 0; i < $formElems.length; i++) {
        const inputName = $formElems[i].getAttribute('name') ?? 'No name';
        const inputType = $formElems[i].getAttribute('type') ?? 'text';
        const inputValue = $formElems[i].value ?? 'No name';
        $formInputs.push({
            inputName,
            inputType: excludeToValidate([inputName, inputType]),
            inputValue,
        });
    }
    ;
    const results = validatorForm($formInputs);
    let inputWithError = null;
    for (const result of results) {
        if (result.isValid === false) {
            inputWithError = result;
            break;
        }
    }
    if (inputWithError === null)
        return evt.target.submit();
    alert('No se pudo procesar tu solicitud. Verifica que hayas completado correctamente lo solicitado.');
}
