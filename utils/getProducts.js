"use strict";
function getProducts(pagesProduct) {
    const $htmlPage = document.createElement('div');
    $htmlPage.innerHTML = pagesProduct.htmlRaw;
    switch (pagesProduct.supermarket.toUpperCase()) {
        case 'LIDER':
            return From.lider($htmlPage, pagesProduct.url);
        case 'SANTAISABEL':
            return From.santaIsabel($htmlPage, pagesProduct.url);
        case 'JUMBO':
            return From.jumbo($htmlPage, pagesProduct.url);
        case 'TOTTUS':
            return From.tottus($htmlPage, pagesProduct.url);
        default:
            console.log($htmlPage, pagesProduct.url);
            return null;
    }
}
