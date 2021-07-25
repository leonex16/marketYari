export function getProducts(text, supermarket) {
  const $htmlPage = document.createElement('div');
  $htmlPage.innerHTML = text;

  switch (supermarket) {
    case 'lider':
      return fromLider($htmlPage);

    case 'santaIsabel':
      return fromSantaIsabel($htmlPage);

    case 'jumbo':
      return fromJumbo($htmlPage);

    case 'tottus':
      return fromTottus($htmlPage);

    default:
      console.log($htmlPage);
      break;
  }
}
