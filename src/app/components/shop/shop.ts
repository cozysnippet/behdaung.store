import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe, NgOptimizedImage } from '@angular/common'; // Import NgOptimizedImage

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  isNew: boolean;
}

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, NgOptimizedImage], // Add it here
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {
  products: Product[] = [
    {
      id: 1,
      name: 'Heavyweight Boxy Tee',
      price: 85,
      category: 'Essentials',
      imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000',
      isNew: true
    },
    {
      id: 2,
      name: 'Relaxed Chino Pant',
      price: 145,
      category: 'Bottoms',
      imageUrl: 'https://images.unsplash.com/photo-1473963441144-67299a9a54a0?q=80&w=1000',
      isNew: false
    },
    {
      id: 3,
      name: 'Wool Blend Overcoat',
      price: 420,
      category: 'Outerwear',
      imageUrl: 'https://images.unsplash.com/photo-1539533318441-60603a7d6664?q=80&w=1000',
      isNew: true
    }
  ];
}
