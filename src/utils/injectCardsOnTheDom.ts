async function injectButtonsOnTheDom(): Promise<void> {
  const json: any  = (await getDataLocal('./data/data.json', 'products'));
  const products: Array<ProductJson> = json['products'];

  const $frag: DocumentFragment = document.createDocumentFragment();
  const $buttonTemplate: any = document.getElementById('card-template');

  for (const product of products.sort(sortFn)) {
    const $cloneBtn: HTMLDivElement = $buttonTemplate.content.cloneNode(true);
    const $img: HTMLImageElement = $cloneBtn.querySelector('.card-container__img')!;
    const $btn: HTMLButtonElement = $cloneBtn.querySelector('.card-container__btn')!;

    $img.src = product.thumbnail;
    $img.alt = product.name;
    $btn.id = product.id;
    $btn.textContent = product.name;
    $btn.setAttribute('data-links', product.links.join(','));

    $frag.appendChild($cloneBtn);
  }

  document.querySelector('.cards-container')!.appendChild($frag);
};

function sortFn(a: any, b: any): number {
  if( a['name'] > b['name'] ) return 1;
  if( a['name'] < b['name'] ) return -1;
  return 0;
}