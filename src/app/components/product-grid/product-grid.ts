import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.css',
})
export class ProductGrid {
  products = [
    { id: 1, nameKh: 'កាបូបស្ពាយចំហៀង', nameEn: 'Classic Easy Zipper Tote', price: 298, image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'New Arrival' },
    { id: 2, nameKh: 'អាវរងាចៀម', nameEn: 'Wool Cashmere Sweater', price: 398, image: 'https://images.pexels.com/photos/6347546/pexels-photo-6347546.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Best Seller' },
    { id: 3, nameKh: 'មួកកម្សាន្ត', nameEn: 'Cashmere Beanie', price: 98, image: 'https://images.pexels.com/photos/16095618/pexels-photo-16095618/free-photo-of-man-in-a-beanie-and-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=800', tag: '' },
    { id: 4, nameKh: 'អាវធំការងារ', nameEn: 'Alpaca Wool Cardigan', price: 248, image: 'https://images.pexels.com/photos/6311612/pexels-photo-6311612.jpeg?auto=compress&cs=tinysrgb&w=800', tag: '' },
    { id: 5, nameKh: 'កាបូបទូរស័ព្ទ', nameEn: 'Concertina Phone Bag', price: 185, image: 'https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Limited' },
    { id: 6, nameKh: 'អាវយឺតមូល', nameEn: 'Classic Cotton Tee', price: 45, image: 'https://images.pexels.com/photos/4066290/pexels-photo-4066290.jpeg?auto=compress&cs=tinysrgb&w=800', tag: '' }
  ];

  constructor(private router: Router) {}

  onViewAll() {
    this.router.navigate(['/shop']);
  }

  onProductClick(id: number) {
    this.router.navigate(['/product', id]);
  }
}
