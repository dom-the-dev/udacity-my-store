import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-add-to-cart-select',
  templateUrl: './add-to-cart-select.component.html',
  styleUrls: ['./add-to-cart-select.component.css']
})
export class AddToCartSelectComponent implements OnInit {
  @Input() product;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product: Product, amount: number) {
    this.cartService.addToCart(product, amount)
    alert(`products added: ${amount}`)
  }
}
