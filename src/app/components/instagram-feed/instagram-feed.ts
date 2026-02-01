import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instagram-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instagram-feed.html',
  styleUrl: './instagram-feed.css',
})
export class InstagramFeed {
  // You can later turn this into an API call to a real feed
  posts = [
    { id: 1, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800' },
    { id: 2, image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800' },
    { id: 3, image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800' },
    { id: 4, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800' },
    { id: 5, image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800' }
  ];

  openInstagram() {
    window.open('https://www.instagram.com/behdaung.fashion/', '_blank');
  }
}
