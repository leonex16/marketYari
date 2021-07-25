export class From{
  static lider($htmlPage) {
    const jsonLdText = $htmlPage.querySelector(`script[type="application/ld+json"]`).innerHTML;
    const dataRow = `${jsonLdText.substring(0, jsonLdText.indexOf('/*'))}}`;
    const dataObj = JSON.parse(dataRow);
    const name = dataObj.name;
    const description = dataObj.description;
    const highPrice = dataObj.offers.highPrice;
    const lowPrice = dataObj.offers.lowPrice;

    return new Product(
      name,
      description,
      highPrice,
      lowPrice,
      'Lider'
    );
  }

  static jumbo($htmlPage) {
    const name = $htmlPage.getElementsByClassName('product-name')[ 0 ].innerHTML;
    const description = $htmlPage.getElementsByClassName('product-description-content')[ 0 ].innerHTML;
    const highPrice = $htmlPage.getElementsByClassName('price-product-value')[ 0 ].innerHTML;
    const lowPrice = $htmlPage.getElementsByClassName('price-best')[ 0 ].innerHTML;

    return new Product(
      name,
      description,
      highPrice,
      lowPrice,
      'Jumbo'
    );
  }

  static santaIsabel($htmlPage) {
    const jsonLdText = $htmlPage.querySelectorAll(`script[type="application/ld+json"]`)[ 1 ].innerHTML;
    const dataRaw = $htmlPage.querySelector('script:not([type]):not([src])').innerHTML;
    const dataStr = JSON.parse(dataRaw.substring(22, dataRaw.indexOf(';')));
    const dataObj = JSON.parse(dataStr);
    const name = dataObj.pdp.product[ 0 ].productName;
    const description = dataObj.pdp.product[ 0 ].description;
    const highPrice = dataObj.pdp.product[ 0 ].items[ 0 ].sellers[ 0 ].commertialOffer.PriceWithoutDiscount;
    const lowPrice = dataObj.pdp.product[ 0 ].items[ 0 ].sellers[ 0 ].commertialOffer.Price;

    return new Product(
      name,
      description,
      highPrice,
      lowPrice,
      'Santa Isabel'
    );
  }

  static tottus($htmlPage) {
    const jsonLdText = $htmlPage.querySelectorAll(`script[type="application/ld+json"]`)[ 0 ].innerHTML;
    const dataObj = JSON.parse(jsonLdText);
    const name = dataObj.name;
    const description = dataObj.description;
    const highPrice = dataObj.offers.highPrice;
    const lowPrice = dataObj.offers.lowPrice;

    return new Product(
      name,
      description,
      highPrice,
      lowPrice,
      'Tottus'
    );
  }

}