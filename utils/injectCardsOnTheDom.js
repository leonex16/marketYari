"use strict";
async function injectButtonsOnTheDom() {
    const json = (await getDataLocal('./data/data.json', 'products'));
    const products = json['products'];
    const $frag = document.createDocumentFragment();
    const $buttonTemplate = document.getElementById('card-template');
    for (const product of products.sort(sortFn)) {
        const $cloneBtn = $buttonTemplate.content.cloneNode(true);
        const $img = $cloneBtn.querySelector('.card-container__img');
        const $btn = $cloneBtn.querySelector('.card-container__btn');
        $img.src = product.thumbnail;
        $img.alt = product.name;
        $btn.id = product.id;
        $btn.textContent = product.name;
        $btn.setAttribute('data-links', product.links.join(','));
        $frag.appendChild($cloneBtn);
    }
    document.querySelector('.cards-container').appendChild($frag);
}
;
function sortFn(a, b) {
    if (a['name'] > b['name'])
        return 1;
    if (a['name'] < b['name'])
        return -1;
    return 0;
}
