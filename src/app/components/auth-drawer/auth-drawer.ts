import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoogleAuth } from '../google-auth/google-auth';
import {TelegramAuth} from '../telegram-auth/telegram-auth';

@Component({
  selector: 'app-auth-drawer',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    GoogleAuth,
    TelegramAuth
  ],
  templateUrl: './auth-drawer.html',
  styleUrl: './auth-drawer.css',
})
export class AuthDrawer {
  isOpen = false;
  currentStep: 'identity' | 'otp' = 'identity';
  private verifyTimeout: any;

  // Individual variables for OTP boxes
  v1 = ''; v2 = ''; v3 = ''; v4 = ''; v5 = ''; v6 = '';

  open() {
    this.isOpen = true;
    this.currentStep = 'identity';
    this.clearOtp();
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.isOpen = false;
    document.body.style.overflow = 'auto';
  }

  clearOtp() {
    this.v1 = ''; this.v2 = ''; this.v3 = '';
    this.v4 = ''; this.v5 = ''; this.v6 = '';
  }

  next(event: any, nextInput?: HTMLInputElement) {
    if (event.target.value && nextInput) {
      nextInput.focus();
    }
  }

  back(event: any, prevInput?: HTMLInputElement) {
    if (event.key === 'Backspace' && !event.target.value && prevInput) {
      prevInput.focus();
    }
  }

  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const clipboardData = event.clipboardData || (window as any).clipboardData;
    const pastedData = clipboardData.getData('text').trim().slice(0, 6);

    if (!/^\d+$/.test(pastedData)) return;

    const digits = pastedData.split('');
    this.v1 = digits[0] || '';
    this.v2 = digits[1] || '';
    this.v3 = digits[2] || '';
    this.v4 = digits[3] || '';
    this.v5 = digits[4] || '';
    this.v6 = digits[5] || '';

    // Auto-verify after 1.5 seconds if 6 digits are present
    if (pastedData.length === 6) {
      if (this.verifyTimeout) clearTimeout(this.verifyTimeout);
      this.verifyTimeout = setTimeout(() => {
        this.verifyOtp();
      }, 1500);
    }
  }

  verifyOtp() {
    // Clear timer if user clicks manually
    if (this.verifyTimeout) clearTimeout(this.verifyTimeout);

    const code = this.v1 + this.v2 + this.v3 + this.v4 + this.v5 + this.v6;
    if (code.length === 6) {
      console.log("Verified Code:", code);
      // Add your API call here
      this.close();
    }
  }
}
