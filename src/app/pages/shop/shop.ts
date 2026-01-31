import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  isNew: boolean;
  color: string;
}

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, RouterLink],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {
  isMobileFilterOpen = false;
  isLaptop: boolean = window.innerWidth > 1024;

  categories = ['All Collections', 'New Arrivals', 'Outerwear', 'Knitwear', 'Essentials'];

  products: Product[] = [
    {
      id: 1,
      name: 'Silk Wide-Leg Pant',
      price: 248,
      category: 'Essentials',
      imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800',
      isNew: true,
      color: 'Sand'
    },
    {
      id: 2,
      name: 'Heavyweight Boxy Tee',
      price: 85,
      category: 'Essentials',
      imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800',
      isNew: false,
      color: 'Bone'
    },
    {
      id: 3,
      name: 'Wool Blend Overcoat',
      price: 420,
      category: 'Outerwear',
      imageUrl: 'https://images.unsplash.com/photo-1539533318441-60603a7d6664?q=80&w=800',
      isNew: true,
      color: 'Charcoal'
    }
  ];

  @HostListener('window:resize', [])
  onResize() {
    this.isLaptop = window.innerWidth > 1024;
  }

  toggleFilter() {
    this.isMobileFilterOpen = !this.isMobileFilterOpen;
  }

  // FIXED: Added missing method to handle broken images
  handleImageError(event: any) {
    event.target.src = 'https://placehold.co/600x800?text=Product+Image';
  }
}
