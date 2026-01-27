import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-float',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-float.html',
  styleUrl: './social-float.css'
})
export class SocialFloat {
  isExpanded = signal(true);

  socials = [
    { name: 'Telegram', icon: 'fab fa-telegram-plane', url: 'https://t.me/behdaung', colorClass: 'tg-color' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/behdaung.fashion/', colorClass: 'ig-color' },
    { name: 'TikTok', icon: 'fab fa-tiktok', url: 'https://www.tiktok.com/@behdaung', colorClass: 'tt-color' },
    { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/behdaung', colorClass: 'fb-color' }
  ];

  toggleMenu() {
    this.isExpanded.set(!this.isExpanded());
  }
}
