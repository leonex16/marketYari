"use strict";
const homePage = async () => {
    injectButtonsOnTheDom();
    document.addEventListener('click', (evt) => {
        if (!evt.target.matches('.card-container__btn'))
            return;
        openManyLink(evt.target.dataset.links.split(','));
    });
    document.addEventListener('submit', onSubmit);
};
homePage();
