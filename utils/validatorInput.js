"use strict";
class ValidatorInput {
    static text(inputValue) {
        const reg = /^[a-zA-Z\s\|]+$/gim;
        return reg.test(inputValue);
    }
}
