import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface JournalEntry {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  featured?: boolean;
  relatedProducts: Product[];
}

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, RouterLink],
  templateUrl: './journal.html',
  styleUrl: './journal.css'
})
export class Journal {
  articles: JournalEntry[] = [
    {
      id: 1,
      title: 'The Art of Mulberry Silk: Heritage to Modern',
      excerpt: 'Discover the sustainable journey of our signature fabric.',
      category: 'Craftsmanship',
      date: 'Jan 28, 2026',
      readTime: '5 min read',
      imageUrl: 'https://images.pexels.com/photos/5705490/pexels-photo-5705490.jpeg?auto=compress&cs=tinysrgb&w=1260',
      featured: true,
      relatedProducts: [
        { id: 101, name: 'Silk Wide-Leg Pant', price: 248, imageUrl: 'https://images.pexels.com/photos/7679482/pexels-photo-7679482.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 102, name: 'Mulberry Camisole', price: 120, imageUrl: 'https://images.pexels.com/photos/5705477/pexels-photo-5705477.jpeg?auto=compress&cs=tinysrgb&w=400' }
      ]
    }
  ];

  handleImageError(event: any) {
    event.target.src = 'https://placehold.co/600x800?text=Image+Unavailable';
  }
}
