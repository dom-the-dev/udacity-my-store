import {Injectable} from '@angular/core';
import {Cart} from "../models/Cart";
import {Order} from "../models/Order";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart = {
    products: [],
    total: 0,
  };

  order: Order = {
    fullName: '',
    total: 0
  }

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

    this.updateCartTotal()

  }

  removeProduct(productId: number) {
    const index = this.cart.products.findIndex(prod => prod.id === productId)
    this.cart.products.splice(index, 1);

    this.updateCartTotal()
  }

  updateCart(productId: number, amount: number): Cart {
    let productIndex = this.cart.products.findIndex(prod => prod.id === productId)

    if (productIndex >= 0) {
      this.cart.products[productIndex].total = this.cart.products[productIndex].price * amount
      this.cart.products[productIndex].amount = amount
    }

    this.updateCartTotal()

    return this.cart;
  }

  updateCartTotal(): void {
    this.cart.total = 0;
    this.cart.products.forEach(product => this.cart.total += product.total)
  }

  createOrder(fullName) {
    this.order = {
      fullName,
      total: this.cart.total
    }
  }

  getOrder(): Order {
    return this.order
  }

}
