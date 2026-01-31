import { Component, HostListener } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  details: string[];
  images: string[];
  sizes: string[];
}

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  selectedSize: string = '';
  activeImageIndex: number = 0;
  showStickyBar: boolean = false;

  product: Product = {
    id: 1,
    name: 'Silk Wide-Leg Pant',
    price: 248.00,
    description: 'Expertly tailored from premium mulberry silk, these wide-leg pants offer a fluid silhouette and superior comfort.',
    details: ['100% Mulberry Silk', 'High-waist construction', 'Side seam pockets'],
    images: [
      'https://images.pexels.com/photos/7679482/pexels-photo-7679482.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/7679489/pexels-photo-7679489.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/5705490/pexels-photo-5705490.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/5705477/pexels-photo-5705477.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/5705482/pexels-photo-5705482.jpeg?auto=compress&cs=tinysrgb&w=1260',
      'https://images.pexels.com/photos/5705491/pexels-photo-5705491.jpeg?auto=compress&cs=tinysrgb&w=1260'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show sticky bar on mobile when scrolled past the initial hero view
    const threshold = window.innerWidth < 1024 ? 450 : 800;
    this.showStickyBar = window.scrollY > threshold;
  }

  onMobileScroll(event: any) {
    const scrollLeft = event.target.scrollLeft;
    const width = event.target.offsetWidth;
    this.activeImageIndex = Math.round(scrollLeft / (width * 0.85)); // Adjusted for 85% width peek
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  handleImageError(event: any) {
    event.target.src = 'https://placehold.co/600x800?text=Image+Coming+Soon';
  }
}
