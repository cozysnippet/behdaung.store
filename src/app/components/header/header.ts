import { Component, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthDrawer } from '../auth-drawer/auth-drawer';
import { Auth } from '../../services/auth';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AuthDrawer, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnDestroy {
  @ViewChild('authDrawer') authDrawer!: AuthDrawer;

  isMobileMenuOpen = false;
  isSearchOpen = false;
  activeMobileTab: string | null = null;

  constructor(public auth: Auth) {}

  // Lifecycle hook to clean up scroll locking
  ngOnDestroy() {
    document.body.style.overflow = 'auto';
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : 'auto';
  }

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
    if(this.isSearchOpen) this.isMobileMenuOpen = false;
  }

  toggleAccordion(tab: string) {
    this.activeMobileTab = this.activeMobileTab === tab ? null : tab;
  }

  // FIXED: Improved mobile login trigger
  // FIXED: Logic to close mobile menu before opening login
  openAuthFromMobile() {
    this.toggleMobileMenu(); // 1. Close the mobile menu
    this.authDrawer.open();
  }

  handleLogout() {
    this.auth.logout();
    if(this.isMobileMenuOpen) this.toggleMobileMenu();
  }
}
