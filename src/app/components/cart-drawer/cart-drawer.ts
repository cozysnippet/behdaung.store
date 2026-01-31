import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-drawer.html',
  styleUrl: './cart-drawer.css',
})
export class CartDrawer {
  @Input() isOpen = false; // Receives the state from Header
  @Output() onClose = new EventEmitter<void>(); // Sends close command back to Header
}
