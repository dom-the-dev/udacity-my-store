import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/Product";
import {CartService} from "../../services/cart.service";
import {Cart, CartProduct} from "../../models/Cart";

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

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  changeAmount() {
    console.log('change')
  }
}
