import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-collections',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-collections.html',
  styleUrl: './featured-collections.css',
})
export class FeaturedCollections {
  collections = [
    {
      id: 'winter-24',
      khmerTitle: 'បណ្តុំរដូវរងា',
      englishTitle: 'The Winter Edit 2024',
      description: 'Crafted from the finest Mongolian cashmere and structured wool.',
      image: 'https://images.pexels.com/photos/6311613/pexels-photo-6311613.jpeg?auto=compress&cs=tinysrgb&w=1260',
      align: 'left'
    },
    {
      id: 'minimal-essentials',
      khmerTitle: 'គ្រឿងសម្អាងមូលដ្ឋាន',
      englishTitle: 'Minimal Essentials',
      description: 'The foundation of a modern wardrobe. Timeless, ethical, and precise.',
      image: 'https://images.pexels.com/photos/5490337/pexels-photo-5490337.jpeg?auto=compress&cs=tinysrgb&w=1260',
      align: 'right'
    }
  ];
}
