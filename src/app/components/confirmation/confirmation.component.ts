import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Order} from "../../models/Order";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  order: Order = {
    fullName: '',
    total: 0
  }

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.order = this.cartService.getOrder()
  }

}
