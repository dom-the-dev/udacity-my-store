import {Injectable} from '@angular/core';
import {Cart, CartProduct} from "../models/Cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart = {
    products: [],
    total: 0,
  };

  constructor() {
  }

  getCart(): Cart {
    return this.cart
  }

  addToCart(product, amount) {
    let cartProduct = {
      id: product.id,
      name: product.name,
      url: product.url,
      price: product.price * amount,
      amount: amount
    }

    this.cart.products.push(cartProduct)
    this.cart.total = this.cart.total + cartProduct.price
  }

}
