import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Cart} from "../../models/Cart";
import {Router} from "@angular/router";

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

  constructor(private router: Router, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  changeAmount(id: number, amount: number): void {
    this.cartService.updateCart(id, amount)
  }

  submitOrder(fullName, address, creditCard): void {
    if (fullName.valid && address.valid && creditCard.valid) {
      this.cartService.createOrder(fullName.control.value)
      this.router.navigate(['/confirmation']);
    } else {
      alert('Check input fields for errors');
    }
  }

  removeProduct(productId: number): void {
    this.cartService.removeProduct(productId)
  }
}
