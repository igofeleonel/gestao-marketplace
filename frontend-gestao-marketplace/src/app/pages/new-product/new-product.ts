import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsServices } from '../../services/products';
import { INewProductRequest } from '../../interfaces/new-product-request';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css',
})
export class NewProduct {
  successMessage = '';
  productImageBae64 = '';
  canSubmit = false;

  productForm = new FormGroup({
    title: new FormControl('', Validators.required),
    price: new FormControl(0, [Validators.required, Validators.min(0.01)]),
    description: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
  });

  private readonly _productsService = inject(ProductsServices);
  private readonly _router = inject(Router);

  constructor() {
    // Observa mudanças no formulário
    this.productForm.statusChanges.subscribe(() => {
      this.updateCanSubmit();
    });
  }

  private updateCanSubmit() {
    this.canSubmit = this.productForm.valid && !!this.productImageBae64;
  }

  saveProduct() {
    if (!this.canSubmit) return;

    const newProduct: INewProductRequest = {
      title: this.productForm.value.title as string,
      description: this.productForm.value.description as string,
      price: this.productForm.value.price as number,
      category: this.productForm.value.category as string,
      imageBase64: this.productImageBae64,
    };

    this._productsService
      .saveProduct(newProduct)
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          this.successMessage = response.message;
          this.productForm.reset();
          this.productImageBae64 = '';
          this.canSubmit = false;
        },
      });
  }

  cancel() {
    this._router.navigate(['/products']);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];
    this.convertFileToBase64(file);
  }

  convertFileToBase64(file: File) {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.productImageBae64 = e.target.result as string;
      console.log(this.productImageBae64);
      this.updateCanSubmit();
    };

    reader.onerror = () => {
      this.productImageBae64 = '';
      this.updateCanSubmit();
    };

    reader.readAsDataURL(file);
  }
}
