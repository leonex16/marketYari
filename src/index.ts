const homePage = async () => {
  injectButtonsOnTheDom();

  document.addEventListener('click', (evt: any) => {
    if(!evt.target.matches('.card-container__btn')) return;

    openManyLink(evt.target.dataset.links.split(','));    
  });
};

homePage();




