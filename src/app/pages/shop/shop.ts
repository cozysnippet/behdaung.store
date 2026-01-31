import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../../components/product-card/product-card';
import { FilterSidebar } from '../../components/filter-sidebar/filter-sidebar';
import { MobileFilter } from '../../components/mobile-filter/mobile-filter';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, ProductCard, FilterSidebar, MobileFilter],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class Shop {
  isMobileFilterOpen = false;
  selectedCategory = 'All Collections';
  categories = ['All Collections', 'New Arrivals', 'Outerwear', 'Knitwear', 'Essentials'];

  products = [
    {
      id: 1,
      name: 'Silk Wide-Leg Pant',
      price: 248,
      discountPrice: 198,
      category: 'Essentials',
      imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800',
      isNew: true,
      color: 'Sand',
      swatches: ['#E3D9C6', '#2C2C2C', '#FFFFFF']
    },
    {
      id: 2,
      name: 'Heavyweight Boxy Tee',
      price: 85,
      category: 'Essentials',
      imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800',
      isNew: false,
      color: 'Bone',
      swatches: ['#F5F5F0', '#000000']
    },
    {
      id: 3,
      name: 'Wool Blend Overcoat',
      price: 495,
      discountPrice: 350,
      category: 'Outerwear',
      imageUrl: 'https://images.unsplash.com/photo-1539533318441-60603a7d6664?q=80&w=800',
      isNew: true,
      color: 'Charcoal',
      swatches: ['#363636', '#1A1A1A']
    },
    {
      id: 4,
      name: 'Cashmere Crewneck',
      price: 320,
      category: 'Knitwear',
      imageUrl: 'https://images.unsplash.com/photo-1576185055363-6d7c88000919?q=80&w=800',
      isNew: false,
      color: 'Heather Grey',
      swatches: ['#B2B2B2', '#E5E5E5', '#222222']
    },
    {
      id: 5,
      name: 'Double-Breasted Blazer',
      price: 385,
      category: 'Outerwear',
      imageUrl: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=800',
      isNew: false,
      color: 'Midnight',
      swatches: ['#191970', '#000000']
    },
    {
      id: 6,
      name: 'Relaxed Cotton Trouser',
      price: 165,
      discountPrice: 120,
      category: 'Essentials',
      imageUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800',
      isNew: false,
      color: 'Olive',
      swatches: ['#556B2F', '#D2B48C']
    },
    {
      id: 7,
      name: 'Ribbed Turtleneck',
      price: 210,
      category: 'Knitwear',
      imageUrl: 'https://images.unsplash.com/photo-1610812382603-9999fc969ec1?q=80&w=800',
      isNew: true,
      color: 'Cream',
      swatches: ['#FFFDD0', '#8B4513']
    },
    {
      id: 8,
      name: 'Technical Raincoat',
      price: 275,
      category: 'Outerwear',
      imageUrl: 'https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=800',
      isNew: false,
      color: 'Black',
      swatches: ['#000000', '#2F4F4F']
    }
  ];

  toggleFilter() {
    this.isMobileFilterOpen = !this.isMobileFilterOpen;
    document.body.style.overflow = this.isMobileFilterOpen ? 'hidden' : 'auto';
  }

  handleCategorySelect(cat: string) {
    this.selectedCategory = cat;
    this.isMobileFilterOpen = false;
    document.body.style.overflow = 'auto';
    // Tip: In a real app, you would add logic here to filter
    // the products array based on the category name
  }
}
