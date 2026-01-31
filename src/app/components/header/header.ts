import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../../services/auth';
import { AuthDrawer } from '../auth-drawer/auth-drawer';
import {MobileNav} from '../mobile-nav/mobile-nav';
import {SearchOverlay} from '../search-overlay/search-overlay';
import {CartDrawer} from '../cart-drawer/cart-drawer';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, AuthDrawer, SearchOverlay, MobileNav, CartDrawer],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @ViewChild('authDrawer') authDrawer!: AuthDrawer;

  isMobileMenuOpen = false;
  isSearchOpen = false;
  isCartOpen = false; // Add this state
  activeMobileTab: string | null = null;

  constructor(public auth: Auth) {}

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : 'auto';
  }

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
    if (this.isSearchOpen) this.isMobileMenuOpen = false;
  }
// Inside your Header class in header.ts
  toggleCart() {
    this.isCartOpen = !this.isCartOpen;

    // High-end UX: Close other menus when cart opens
    if (this.isCartOpen) {
      this.isSearchOpen = false;
      this.isMobileMenuOpen = false;
      document.body.style.overflow = 'hidden'; // Lock background
    } else {
      document.body.style.overflow = 'auto'; // Unlock background
    }
  }

  toggleAccordion(tab: string) {
    this.activeMobileTab = this.activeMobileTab === tab ? null : tab;
  }

  openAuthFromMobile() {
    this.toggleMobileMenu();
    this.authDrawer.open();
  }
}
