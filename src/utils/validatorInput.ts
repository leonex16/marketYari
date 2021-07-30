class ValidatorInput {
  static text(inputValue: string): boolean {
    const reg: RegExp = /^[a-zA-Z\s\|]+$/gim;

    return reg.test(inputValue);
  }
}