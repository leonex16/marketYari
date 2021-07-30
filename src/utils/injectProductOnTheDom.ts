function injectProductOnTheDom(productsCategory: Array<ProductsCategory>){
  const $frag: DocumentFragment = document.createDocumentFragment();
  const $cardProductTemplate: any = document.getElementById('card-product-template')
  const $prodTemplate: any = document.getElementById('product-template')!;
  const $productsContainer: HTMLElement = document.querySelector('.products')!;
  
  for (const productCategory of productsCategory) {
    const $cardProdClone: HTMLElement = $cardProductTemplate.content.cloneNode(true);
    
    $cardProdClone.querySelector('.category-container__text')!.textContent = productCategory.name;
    
    for (const product of productCategory.products) {
      const $prodClone: HTMLElement = $prodTemplate.content.cloneNode(true);

      // $prodClone.querySelector('.product-container')?.setAttribute('id', )
      $prodClone.querySelector('.image-container__img')!.setAttribute('src', productCategory.thumbnail);
      $prodClone.querySelector('.info-container__name')!.textContent = `${product.name} - ${product.supermarket}`;
      $prodClone.querySelector('.info-container__description')!.textContent = product.description;
      $prodClone.querySelector('.prices_container__high')!.textContent = product.highPrice;
      $prodClone.querySelector('.prices_container__low')!.textContent = product.lowPrice;
      $prodClone.querySelector('.redirect-container')!.textContent = product.url;
      $prodClone.querySelector('.redirect-container')!.setAttribute('supermarket', product.supermarket);

      $cardProdClone.querySelector('.products-container')?.appendChild($prodClone);
    }
    
    $frag.appendChild($cardProdClone);
    
  };

  $productsContainer.appendChild($frag);
  
};