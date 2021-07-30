function getSupermarketName(url: string): string {
  const indxStart: number = url.indexOf('.') + 1;
  const indxEnd: number = url.indexOf('.cl');

  return url.substring(indxStart, indxEnd);
}