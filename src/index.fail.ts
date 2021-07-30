const homePage = async () => {
  // In a frame because it set 'X-Frame-Options' to 'sameorigin'.
  // const json: any  = (await getDataLocal('./data/data.json'));
  // const productsRaw: Array<ProductJson> = json['products'];

  // const $cardProdTemplate: any = document.getElementById('card-product-template');
  // const $frag: DocumentFragment = document.createDocumentFragment();

  // for (const product of productsRaw) {
  //   const $cardProdClone: HTMLElement = $cardProdTemplate.content.cloneNode('true');
    
  //   $cardProdClone.querySelector('.category-container__text')!.textContent = product.name;
    
  //   for (const link of product.links) {
  //     const $iframe: HTMLIFrameElement = document.createElement('iframe');

  //     $iframe.src = link;
  //     $iframe.setAttribute('class', 'products-container__product')
      
  //     $cardProdClone.querySelector('.products-container')!.appendChild($iframe);
  //   }

  //   $frag.appendChild($cardProdClone);
  // }
  // document.querySelector('.products')!.appendChild($frag);


  // I DO NOT HOW TO WAIT TO RENDER A PAGE
  // Load data of json 
  // const productsCategory: Array<ProductsCategory> = [];
  // const json: any  = (await getDataLocal('./data/data.json'));
  // const productsRaw: Array<ProductJson> = json['products'];

  // for (const product of productsRaw) {
  //   const productCategoryTemp: ProductsCategory = {
  //     name: product.name,
  //     thumbnail: product.thumbnail,
  //     products: []
  //   };
  //   const pagesProduct: Array<PageProduct> = [];
    
  //   // link to htmlRow
  //   for (const link of product.links) {
  //     const pageProduct: PageProduct = {
  //       url: link,
  //       supermarket: getSupermarketName(link),
  //       htmlRaw: await httpResponseText(link)
  //     }
      
  //     pagesProduct.push(pageProduct);
  //   }

  //   // Get and Transform Products
  //   for (const productRaw of pagesProduct) {
  //     const prodTem: Product | null = getProducts(productRaw);
  //     prodTem instanceof Product && productCategoryTemp.products.push(prodTem);
  //   }

  //   productsCategory.push(productCategoryTemp);
  // }
  // injectProductOnTheDom(productsCategory);
  
};

homePage();

