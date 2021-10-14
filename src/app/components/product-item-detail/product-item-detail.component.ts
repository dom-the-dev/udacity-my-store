import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../models/Product";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  products: Product[] = [];
  product: Product | null = null;

  constructor(private route: ActivatedRoute, private productService: ProductsService) {
    this.route.params.subscribe(params => {
      this.productService.getProducts().subscribe(res => {
        this.products = res
        this.product = this.filterProduct((params['id']))
      });
    });
  }

  ngOnInit(): void {

  }

  filterProduct(id: string): Product {
    return this.products.filter(product => product.id === parseInt(id))[0]
  }

}
