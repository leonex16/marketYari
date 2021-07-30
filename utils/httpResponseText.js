"use strict";
async function httpResponseText(url) {
    const res = await fetch(url);
    const text = await res.text();
    return text;
}
