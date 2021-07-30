interface ProductJson {
  id: string, 
  name: string, 
  thumbnail: string, 
  links: Array<string>
};

// Lider & Tottus
interface JldGeneric {
  "@context":  string;
  "@type":     string;
  name:        string;
  brand:       string;
  image:       string;
  description: string;
  category:    string;
  gtin13:      string;
  sku:         string;
  offers:      Offers;
}

interface Offers {
  "@type":       string;
  highPrice:     string;
  lowPrice:      string;
  priceCurrency: string;
}

// Cencosud
interface JldCencosud {
  pdp:  PDP;
  menu: Menu;
}

interface Menu {
  slug:       string;
  acf:        Acf;
  updateTime: Date;
}

interface Acf {
  items:            AcfItem[];
  fixed_categories: FixedCategory[];
  offers:           Offer[];
}

interface FixedCategory {
  title: string;
}

interface AcfItem {
  title:  string;
  url:    string;
  active: boolean;
  items:  ItemsItem[] | boolean;
}

interface ItemsItem {
  title:  string;
  url:    string;
  active: boolean;
  items:  boolean;
}

interface Offer {
  title:      string;
  url:        string;
  active:     boolean;
  start_date: string;
  end_date:   string;
}

interface PDP {
  product: Product[];
}

interface Product {
  productId:          string;
  productName:        string;
  productReference:   string;
  brand:              string;
  SkuData:            string[];
  categoriesIds:      string[];
  productClusters:    { [key: string]: string };
  linkText:           string;
  productTitle:       null;
  metaTagDescription: null;
  categories:         string[];
  description:        string;
  clusterHighlights:  { [key: string]: string };
  items:              ProductItem[];
}

interface ProductItem {
  itemId:          string;
  name:            string;
  unitMultiplier:  number;
  measurementUnit: string;
  complementName:  string;
  images:          Image[];
  referenceId:     ReferenceID[];
  sellers:         Seller[];
}

interface Image {
  imageUrl: string;
  imageTag: string;
}

interface ReferenceID {
  Key:   string;
  Value: string;
}

interface Seller {
  sellerId:        string;
  sellerName:      string;
  commertialOffer: CommertialOffer;
}

interface CommertialOffer {
  Price:                string;
  ListPrice:            string;
  PriceWithoutDiscount: string;
  AvailableQuantity:    string;
}
