export class CartProduct {
  id: number;
  name: string;
  url: string;
  price: number;
  amount: number;

  constructor() {
    this.id = 0;
    this.name  = '';
    this.url  = '';
    this.price = 0;
    this.amount = 0;
  }
}


export class Cart {
  products: CartProduct[];
  total: number;

  constructor() {
    this.products = [];
    this.total = 0;
  }
}
