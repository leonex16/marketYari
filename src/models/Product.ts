class Product {
  private Name: string;
  private Description: string;
  private HighPrice: string;
  private LowPrice: string;
  private Url: string;
  private Supermarket: string;

  constructor(name: string | null, description: string | null, highPrice: string | null, lowPrice: string | null, url?: string, supermarket?: string) {
    this.Name = name ?? 'Sin Información';
    this.Description = description ?? 'Sin Información';
    this.HighPrice = highPrice ?? 'Sin Información';
    this.LowPrice = lowPrice ?? 'Sin Información';
    this.Url = url ?? 'Sin Información';
    this.Supermarket = supermarket ?? 'Sin Información';
  }

  get name() {
    return this.Name
  };
  
  get description() {
    return this.Description
  };
  
  get highPrice() {
    return this.HighPrice
  };
  
  get lowPrice() {
    return this.LowPrice
  };
  
  get url() {
    return this.Url
  };
  
  get supermarket() {
    return this.Supermarket
  };
  

}