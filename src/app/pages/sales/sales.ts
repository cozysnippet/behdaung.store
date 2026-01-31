import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

interface SaleProduct {
  id: number;
  name: string;
  originalPrice: number;
  discountPrice: number;
  category: string;
  imageUrl: string;
  discountPercentage: number;
  stockLevel?: number; // Add this
}

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, RouterLink],
  templateUrl: './sales.html',
  styleUrl: './sales.css'
})
export class Sales {
  // Mock data for the seasonal sale
  saleProducts: SaleProduct[] = [
    {
      id: 201,
      name: 'Cashmere Oversized Knit',
      originalPrice: 350,
      discountPrice: 245,
      category: 'Knitwear',
      imageUrl: 'https://images.unsplash.com/photo-1574180563860-02603dbd2116?q=80&w=800',
      discountPercentage: 30,
      stockLevel: 3
    },
    {
      id: 202,
      name: 'Tailored Wool Skirt',
      originalPrice: 210,
      discountPrice: 147,
      category: 'Bottoms',
      imageUrl: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800',
      discountPercentage: 30,
      stockLevel: 3
    },
    {
      id: 203,
      name: 'Classic Trench Coat',
      originalPrice: 580,
      discountPrice: 348,
      category: 'Outerwear',
      imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800',
      discountPercentage: 40
    },
    {
      id: 204,
      name: 'Silk Slip Dress',
      originalPrice: 295,
      discountPrice: 206,
      category: 'Dresses',
      imageUrl: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800',
      discountPercentage: 30
    }
  ];

  handleImageError(event: any) {
    event.target.src = 'https://placehold.co/600x800?text=Product+Image';
  }
}
