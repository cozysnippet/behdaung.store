import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductCard, Product } from '../../components/product-card/product-card';
import { FilterSidebar } from '../../components/filter-sidebar/filter-sidebar';
import { MobileFilter } from '../../components/mobile-filter/mobile-filter';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, ProductCard, FilterSidebar, MobileFilter],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class Shop implements OnInit {
  isMobileFilterOpen = false;

  // Categories matching Mobile Nav exactly
  selectedCategory = 'ទំនិញទាំងអស់ (All Products)';
  categories = [
    'ទំនិញទាំងអស់ (All Products)',
    'សម្រាប់នារី (Women)',
    'សម្រាប់បុរស (Men)',
    'គ្រឿងអលង្ការ (Accessories)',
    'ស្បែកជើង (Shoes)'
  ];

  categoryMapping: any = {
    'all': 'ទំនិញទាំងអស់ (All Products)',
    'women': 'សម្រាប់នារី (Women)',
    'men': 'សម្រាប់បុរស (Men)',
    'accessories': 'គ្រឿងអលង្ការ (Accessories)',
    'shoes': 'ស្បែកជើង (Shoes)'
  };

  // Fixed: Added 'color' and 'swatches' to every product to stop the TS2741 error
  products: Product[] = [
    {
      id: 1,
      name: 'Silk Wide-Leg Pant',
      price: 248,
      category: 'women',
      imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800',
      color: 'Sand',
      swatches: ['#E3D9C6', '#2C2C2C'],
      isNew: true
    },
    {
      id: 2,
      name: 'Heavyweight Tee',
      price: 85,
      category: 'men',
      imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
      color: 'Black',
      swatches: ['#000000', '#FFFFFF']
    },
    {
      id: 3,
      name: 'Gold Link Bracelet',
      price: 450,
      category: 'accessories',
      imageUrl: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800',
      color: 'Gold Highlighter',
      swatches: ['#D4AF37']
    },
    {
      id: 4,
      name: 'Leather Chelsea Boot',
      price: 320,
      category: 'shoes',
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800',
      color: 'Espresso',
      swatches: ['#3D2B1F', '#000000'],
      isNew: true
    }
  ];

  filteredProducts = [...this.products];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const categoryQuery = params['category'];
      if (categoryQuery && this.categoryMapping[categoryQuery]) {
        this.handleCategorySelect(this.categoryMapping[categoryQuery]);
      } else {
        this.handleCategorySelect('ទំនិញទាំងអស់ (All Products)');
      }
    });
  }

  toggleFilter() {
    this.isMobileFilterOpen = !this.isMobileFilterOpen;
  }

  handleCategorySelect(category: string) {
    this.selectedCategory = category;
    this.isMobileFilterOpen = false;

    if (category === 'ទំនិញទាំងអស់ (All Products)') {
      this.filteredProducts = this.products;
    } else {
      const key = Object.keys(this.categoryMapping).find(k => this.categoryMapping[k] === category);
      this.filteredProducts = this.products.filter(p => p.category === key);
    }
  }
}
