import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  isNew: boolean;
  tag?: string;
}

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, RouterLink],
  templateUrl: './new-arrivals.html',
  styleUrl: './new-arrivals.css'
})
export class NewArrivals {
  products: Product[] = [
    {
      id: 101,
      name: 'Structured Wool Blazer',
      price: 420,
      category: 'Outerwear',
      imageUrl: 'https://images.unsplash.com/photo-1548629721-8263c29bf27e?q=80&w=800',
      isNew: true,
      tag: 'Limited'
    },
    {
      id: 102,
      name: 'Ribbed Cashmere Sweater',
      price: 295,
      category: 'Knitwear',
      imageUrl: 'https://images.unsplash.com/photo-1574167132757-1247a894705b?q=80&w=800',
      isNew: true
    },
    {
      id: 103,
      name: 'Silk Bias-Cut Skirt',
      price: 185,
      category: 'Bottoms',
      imageUrl: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=800',
      isNew: true,
      tag: 'Best Seller'
    },
    {
      id: 104,
      name: 'Leather Frame Bag',
      price: 550,
      category: 'Accessories',
      imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800',
      isNew: true,
      tag: 'New'
    },
    {
      id: 105,
      name: 'Oversized Trench Coat',
      price: 380,
      category: 'Outerwear',
      imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800',
      isNew: true
    },
    {
      id: 106,
      name: 'High-Waist Wide Trouser',
      price: 210,
      category: 'Bottoms',
      imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800',
      isNew: true
    },
    {
      id: 107,
      name: 'Minimalist Chelsea Boot',
      price: 340,
      category: 'Footwear',
      imageUrl: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=800',
      isNew: true,
      tag: 'Coming Soon'
    },
    {
      id: 108,
      name: 'Heavyweight Boxy Tee',
      price: 75,
      category: 'Essentials',
      imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800',
      isNew: true
    }
  ];

  handleImageError(event: any) {
    event.target.src = 'https://placehold.co/600x800?text=Collection+Coming+Soon';
  }
}
