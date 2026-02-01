import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories-section.html',
  styleUrl: './categories-section.css',
})
export class CategoriesSection {
  categories = [
    { id: '01', khmerTitle: 'ស្ទាយថ្មីៗ', englishTitle: 'New Arrivals', img: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: '02', khmerTitle: 'ប្រចាំថ្ងៃ', englishTitle: 'Casual Edit', img: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: '03', khmerTitle: 'ពេញនិយម', englishTitle: 'Best Sellers', img: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: '04', khmerTitle: 'ការងារ', englishTitle: 'Workwear', img: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { id: '05', khmerTitle: 'គ្រឿងអលង្ការ', englishTitle: 'Accessories', img: 'https://images.pexels.com/photos/1453008/pexels-photo-1453008.jpeg?auto=compress&cs=tinysrgb&w=800' }
  ];

  navigateToCategory(id: string) {
    console.log('Navigating to:', id);
  }
}
