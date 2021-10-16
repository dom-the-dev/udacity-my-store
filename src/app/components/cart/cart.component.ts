import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Cart} from "../../models/Cart";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart = {
    products: [],
    total: 0,
  };

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  changeAmount(id: number, amount: number): void {
    this.cartService.updateCart(id, amount)
  }

  removeProduct(productId: number): void {
    this.cartService.removeProduct(productId)
  }

  createOrder(fullName: string): void {
    this.cartService.createOrder(fullName)
  }
}
