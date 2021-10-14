import {Component, Input, OnInit, NgModule} from '@angular/core';
import {Product} from "../../models/Product";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-add-to-cart-select',
  templateUrl: './add-to-cart-select.component.html',
  styleUrls: ['./add-to-cart-select.component.css']
})
export class AddToCartSelectComponent implements OnInit {
  @Input() product;

  selectedAmount: number = 1;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product, this.selectedAmount)
    alert(`You added: ${product.name} ${this.selectedAmount} time/s`)
  }
}
