type ProductData = {
  name: string | null
  description: string | null
  highPrice: string | null
  lowPrice: string | null
  supermarket: string | null
};

type PageProduct = {
  url: string,
  supermarket: string,
  htmlRaw: string
}

type ProductsCategory = {
  name: string,
  thumbnail: string,
  products: Array<Product>    
}
