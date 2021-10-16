import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  @Output() submitOrder: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  submit(fullName, address, creditCard): void {
    if (fullName.valid && address.valid && creditCard.valid) {
      this.submitOrder.emit(fullName.control.value)
      this.router.navigate(['/confirmation']);
    } else {
      alert('Check input fields for errors');
    }
  }

}
