import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMobileMenuOpen = false;
  isSearchOpen = false;
  activeMobileTab: string | null = null; // To handle Accordion state

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  toggleAccordion(tab: string) {
    this.activeMobileTab = this.activeMobileTab === tab ? null : tab;
  }
}
