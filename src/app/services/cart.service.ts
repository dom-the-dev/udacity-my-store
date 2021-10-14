import {Injectable} from '@angular/core';
import {Cart} from "../models/Cart";

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
    let numberOfProducts = parseInt(amount)
    let index = this.cart.products.findIndex((prod) => prod.id === product.id)

    if (index >= 0) {
      this.cart.products[index].price += product.price * numberOfProducts
      this.cart.products[index].amount += numberOfProducts
      this.cart.total += product.price
    } else {
      let cartProduct = {
        id: product.id,
        name: product.name,
        url: product.url,
        price: product.price * numberOfProducts,
        amount: numberOfProducts
      }

      this.cart.products.push(cartProduct)
      this.cart.total = this.cart.total + cartProduct.price
    }

  }

  removeFromCart() {

  }

}
