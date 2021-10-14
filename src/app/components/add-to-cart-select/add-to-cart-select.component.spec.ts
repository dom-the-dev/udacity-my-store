import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartSelectComponent } from './add-to-cart-select.component';

describe('AddToCartSelectComponent', () => {
  let component: AddToCartSelectComponent;
  let fixture: ComponentFixture<AddToCartSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToCartSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
