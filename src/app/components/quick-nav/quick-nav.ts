import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quick-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './quick-nav.html',
  styleUrls: ['./quick-nav.css']
})
export class QuickNav {
  @Input() authUser: any = null;
  @Input() cartCount: number = 0;

  @Output() onMenu = new EventEmitter<void>();
  @Output() onSearch = new EventEmitter<void>();
  @Output() onProfile = new EventEmitter<void>();
}
