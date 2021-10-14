import {Injectable} from '@angular/core';
import {CartProduct} from "../models/Cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartProduct[] = []

  constructor() {
  }

  getCart(): CartProduct[] {
    return this.cart
  }

  addToCart(product, amount) {
    let cartProduct = {
      id: product.id,
      name: product.name,
      price: product.price * amount,
      amount: amount
    }

    this.cart.push(cartProduct)
  }

}
