import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-overlay',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, FormsModule],
  templateUrl: './search-overlay.html',
  styleUrls: ['./search-overlay.css']
})
export class SearchOverlay {
  @Output() onClose = new EventEmitter<void>();
  searchQuery: string = '';

  // 20 Mock Products for UI Testing
  allProducts = [
    { id: 1, name: 'Silk Wide-Leg Pant', price: 248, category: 'Essentials', imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=200' },
    { id: 2, name: 'Heavyweight Boxy Tee', price: 85, category: 'Essentials', imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=200' },
    { id: 3, name: 'Wool Cashmere Coat', price: 595, category: 'Outerwear', imageUrl: 'https://images.unsplash.com/photo-1539533318441-60603a7d6664?q=80&w=200' },
    { id: 4, name: 'Ribbed Knit Sweater', price: 185, category: 'Knitwear', imageUrl: 'https://images.unsplash.com/photo-1576185055363-6d7c88000919?q=80&w=200' },
    { id: 5, name: 'Technical Rain Jacket', price: 320, category: 'Outerwear', imageUrl: 'https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=200' },
    { id: 6, name: 'Relaxed Chino', price: 145, category: 'Essentials', imageUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=200' },
    { id: 7, name: 'Linen Button Down', price: 110, category: 'Essentials', imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=200' },
    { id: 8, name: 'Leather Chelsea Boot', price: 350, category: 'Footwear', imageUrl: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=200' },
    { id: 9, name: 'Minimalist Backpack', price: 195, category: 'Accessories', imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=200' },
    { id: 10, name: 'Puffer Down Vest', price: 275, category: 'Outerwear', imageUrl: 'https://images.unsplash.com/photo-1629130165039-4467364d930f?q=80&w=200' },
    { id: 11, name: 'Cotton Twill Cap', price: 45, category: 'Accessories', imageUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=200' },
    { id: 12, name: 'Oversized Hoodie', price: 125, category: 'Essentials', imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=200' },
    { id: 13, name: 'Selvedge Denim', price: 210, category: 'Essentials', imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=200' },
    { id: 14, name: 'Canvas Tote Bag', price: 65, category: 'Accessories', imageUrl: 'https://images.unsplash.com/photo-1544816153-199d821e11c3?q=80&w=200' },
    { id: 15, name: 'Mock Neck Knit', price: 160, category: 'Knitwear', imageUrl: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=200' },
    { id: 16, name: 'Silk Slip Dress', price: 295, category: 'Essentials', imageUrl: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=200' },
    { id: 17, name: 'Double-Breasted Blazer', price: 425, category: 'Outerwear', imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=200' },
    { id: 18, name: 'Wool Scarf', price: 95, category: 'Accessories', imageUrl: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=200' },
    { id: 19, name: 'Leather Card Holder', price: 55, category: 'Accessories', imageUrl: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=200' },
    { id: 20, name: 'Cropped Cardigan', price: 140, category: 'Knitwear', imageUrl: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=200' }
  ];

  filteredProducts = [...this.allProducts];

  constructor(private router: Router) {}

  performSearch() {
    const query = this.searchQuery.toLowerCase().trim();
    this.filteredProducts = query
      ? this.allProducts.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      )
      : [...this.allProducts];
  }

  goToProduct(id: number) {
    this.onClose.emit();
    this.router.navigate(['/product', id]);
  }
}
