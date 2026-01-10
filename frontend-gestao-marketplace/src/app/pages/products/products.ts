import { Component, inject, OnInit } from '@angular/core';
import { ProductsServices } from '../../services/products';
import { take } from 'rxjs';
import { IProductsResponse } from '../../interfaces/products-response';
import { IProductResponse } from '../../interfaces/product-repsonse';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  products: IProductResponse[] = [];
  filteredProducts: IProductResponse[] = [];
  filterForm = new FormGroup({
    title: new FormControl(''),
    status: new FormControl(''),
  });

  private readonly _productsService = inject(ProductsServices);

  ngOnInit() {
    this._productsService
      .getProducts()
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          this.products = response.data;
          this.filteredProducts = response.data;
        },
      });
  }

  filterProducts() {
    const title = this.filterForm.value.title?.toLowerCase();
    const status = this.filterForm.value.status?.toLowerCase();

    this.filteredProducts = this.products.filter(
      (product) =>
        (!title || product.title.toLowerCase().includes(title)) &&
        (!status || product.status.toLowerCase().includes(status))
    );
  }

  clearFilter() {
    this.filterForm.reset();
    this.filterForm.get('status')?.setValue('');

    this.filteredProducts = this.products;
  }
}
