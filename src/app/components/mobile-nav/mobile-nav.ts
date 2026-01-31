import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './mobile-nav.html',
  styleUrls: ['./mobile-nav.css']
})
export class MobileNav {
  @Input() authUser: any;
  @Input() activeMobileTab: string | null = null;

  @Output() onClose = new EventEmitter<void>();
  @Output() onToggleAccordion = new EventEmitter<string>();
  @Output() onLogin = new EventEmitter<void>();
  @Output() onLogout = new EventEmitter<void>();

  // Helper to handle closing and navigating in one go
  handleSelection() {
    this.onClose.emit();
  }
}
