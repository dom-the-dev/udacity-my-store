import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/Product";
import {CartService} from "../../services/cart.service";
import {CartProduct} from "../../models/Cart";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartProducts: CartProduct[] = []

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartProducts = this.cartService.getCart();
    console.log(this.cartProducts)
  }

}
