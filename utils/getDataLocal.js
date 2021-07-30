"use strict";
async function getDataLocal(pathRelative, varLS) {
    const res = await fetch(pathRelative);
    const dataRaw = await res.text();
    if (varLS === undefined)
        return JSON.parse(dataRaw);
    const dataLS = localStorage.getItem(varLS);
    if (dataLS === null || dataRaw.length > dataLS?.length) {
        localStorage.setItem(varLS, dataRaw);
        return JSON.parse(dataRaw);
    }
    console.log('Get data of local storage');
    return JSON.parse(dataLS);
}
;
