export class CartProduct {
  id: number;
  name: string;
  price: number;
  url: string;
  amount: number;
  total: number;

  constructor() {
    this.id = 0;
    this.name  = '';
    this.url  = '';
    this.price = 0;
    this.amount = 0;
    this.total = 0;
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
