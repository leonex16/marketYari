"use strict";
function getSupermarketName(url) {
    const indxStart = url.indexOf('.') + 1;
    const indxEnd = url.indexOf('.cl');
    return url.substring(indxStart, indxEnd);
}
