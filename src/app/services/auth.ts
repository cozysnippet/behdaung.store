import {Injectable, signal} from '@angular/core';
import {TelegramUser} from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  // We use a Signal to store the user so the UI updates instantly
  currentUser = signal<TelegramUser | null>(null);

  constructor() {
    // Check if a user is already saved in the browser
    const savedUser = localStorage.getItem('tg_user');
    if (savedUser) {
      this.currentUser.set(JSON.parse(savedUser));
    }
  }

  login(user: TelegramUser) {
    localStorage.setItem('tg_user', JSON.stringify(user));
    this.currentUser.set(user);
  }

  logout() {
    localStorage.removeItem('tg_user');
    this.currentUser.set(null);
  }
}
