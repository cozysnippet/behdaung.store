import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice?: number; // Added for discount logic
  imageUrl: string;
  color: string;
  isNew?: boolean;
  swatches?: string[]; // Added for the 'missing' detail
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product!: Product;

  get discountPercentage(): number {
    if (!this.product.discountPrice) return 0;
    return Math.round(((this.product.price - this.product.discountPrice) / this.product.price) * 100);
  }

  handleQuickAdd(event: Event) {
    event.stopPropagation();
    console.log('Quick add triggered for:', this.product.name);
  }
}
