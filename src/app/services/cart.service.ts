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
    const numberOfProducts = parseInt(amount)
    const index = this.cart.products.findIndex((prod) => prod.id === product.id)
    const totalProductPrice = product.price * numberOfProducts

    if (index >= 0) {
      this.cart.products[index].total += totalProductPrice
      this.cart.products[index].amount += numberOfProducts
    } else {
      let cartProduct = {
        id: product.id,
        name: product.name,
        url: product.url,
        price: product.price,
        total: totalProductPrice,
        amount: numberOfProducts
      }

      this.cart.products.push(cartProduct)
    }

    this.cart.total = 0;
    this.cart.products.forEach(product => this.cart.total += product.total)

  }

  updateCart(productId: number, amount: number): Cart {
    let productIndex = this.cart.products.findIndex(prod => prod.id === productId)

    if (productIndex >= 0) {
      this.cart.products[productIndex].total = this.cart.products[productIndex].price * amount
      this.cart.products[productIndex].amount = amount
    }

    this.cart.total = 0;
    this.cart.products.forEach(product => this.cart.total += product.total)

    return this.cart;
  }

}
