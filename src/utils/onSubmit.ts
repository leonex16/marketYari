function onSubmit(evt: any): void {
  evt.preventDefault();
    
    const $formElems: HTMLInputElement[]  = evt.target.querySelectorAll('*[id][name]');
    const $formInputs: ValidatorFormIn[] = [];
    
    for (let i = 0; i < $formElems.length; i++) {
      const inputName: string = $formElems[i].getAttribute('name') ?? 'No name';
      const inputType: string = $formElems[i].getAttribute('type') ?? 'text';
      const inputValue: string = $formElems[i].value ?? 'No name';

      $formInputs.push({
        inputName,
        inputType: excludeToValidate([inputName, inputType]),
        inputValue,
      });
    };
    
    const results: ValidatorFormOut[] = validatorForm($formInputs);
    let inputWithError: ValidatorFormOut | null = null;

    for (const result of results) {
      if(result.isValid === false){
        inputWithError = result;
        break;
      }
    }

    if(inputWithError === null) return evt.target.submit();

    alert('No se pudo procesar tu solicitud. Verifica que hayas completado correctamente lo solicitado.');
}