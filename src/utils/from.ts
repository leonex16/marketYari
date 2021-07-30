class From{
  static lider($htmlPage: HTMLDivElement, url: string): Product | null {
    try {
      const jsonLdText: string | undefined = $htmlPage.querySelector(`script[type="application/ld+json"]`)?.innerHTML;
      if(jsonLdText === undefined) throw new Error('Error: Lider, It does not found ld json');
      const dataRow: string = `${jsonLdText.substring(0, jsonLdText.indexOf('/*'))}}`;
      const jsonLinkData: JldGeneric = JSON.parse(dataRow);
  
      return new Product(
        jsonLinkData.name,
        jsonLinkData.description,
        jsonLinkData.offers.highPrice,
        jsonLinkData.offers.lowPrice,
        url,
        'Lider'
      );
    } catch (error) {
      console.log(error, url);
      return null;
    }
  }

  static jumbo($htmlPage: HTMLDivElement, url: string): Product | null {
    try {
      function getPricesProductJumbo(): {highPrice: string, lowPrice: string } {
        let lowPrice: string = $htmlPage.querySelectorAll('.price-best')[1].textContent ?? 'Sin Información';
        const highPrice: string = $htmlPage.querySelectorAll('.price-best')[0].textContent ?? 'Sin Información';
        const prom: string = $htmlPage.querySelectorAll('.price-product-prom')[0].textContent ?? '';

        if(prom !== '' && lowPrice !== 'Sin Información'){
          lowPrice = `${prom} ${lowPrice}`;
        }

        return { highPrice, lowPrice };
      };

      const productData: ProductData = {
        name: $htmlPage.querySelector('.product-name')?.textContent ?? 'Sin Información',
        description: $htmlPage.querySelector('.product-description-content')?.textContent ?? 'Sin Información',
        highPrice: getPricesProductJumbo().highPrice, 
        lowPrice: getPricesProductJumbo().lowPrice,
        supermarket: 'Jumbo'
      };
      
      return new Product(
        productData.name,
        productData.description,
        productData.highPrice,
        productData.lowPrice,
        url,
        productData.supermarket!
      );
    } catch (error) {
      console.log('Error: Jumbo ==> ', error, url);
      return null;
    };
  }

  static santaIsabel($htmlPage: HTMLDivElement, url: string): Product | null {
    try {
      const dataRaw: string | undefined = $htmlPage.querySelector('script:not([type]):not([src])')?.innerHTML;
      if(dataRaw === undefined) throw new Error('Error: Santa Isabel, It does not found ld json');
      const dataStr: string = JSON.parse(dataRaw.substring(22, dataRaw.indexOf(';')));
      const jsonLinkData: JldCencosud = JSON.parse(dataStr);
      const product: Product = jsonLinkData.pdp.product[0];

      return new Product(
        product.productName,
        product.description,
        product.items[0].sellers[0].commertialOffer.PriceWithoutDiscount,
        product.items[0].sellers[0].commertialOffer.Price,
        url,
        'Santa Isabel'
      );
      
    } catch (error) {
      console.log(error, url);
      return null;
    }
  }

  static tottus($htmlPage: HTMLDivElement, url: string): Product | null {
    const jsonLdText: string = $htmlPage.querySelectorAll(`script[type="application/ld+json"]`)[ 0 ].innerHTML;
    const JsonLinkDataWalmart: JldGeneric = JSON.parse(jsonLdText);

    return new Product(
      JsonLinkDataWalmart.name,
      JsonLinkDataWalmart.description,
      JsonLinkDataWalmart.offers.highPrice,
      JsonLinkDataWalmart.offers.lowPrice,
      url,
      'Tottus'
    );
  }

}