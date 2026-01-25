import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthDrawer } from '../auth-drawer/auth-drawer';
import {Auth} from '../../services/auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    AuthDrawer
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @ViewChild('authDrawer') authDrawer!: AuthDrawer;

  isMobileMenuOpen = false;
  isSearchOpen = false;
  activeMobileTab: string | null = null;

  constructor(public auth: Auth) {}

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // Prevent scrolling when menu is open
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : 'auto';
  }

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  toggleAccordion(tab: string) {
    this.activeMobileTab = this.activeMobileTab === tab ? null : tab;
  }

  // FIXED: Logic to close mobile menu before opening login
  openAuthFromMobile() {
    this.toggleMobileMenu(); // 1. Close the mobile menu
    this.authDrawer.open();
    // setTimeout(() => {
    //   this.authDrawer.open(); // 2. Open the drawer after menu closes
    //   this.authDrawer.open();
    // }, 300);
  }
}
