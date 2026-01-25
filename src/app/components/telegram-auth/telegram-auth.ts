import {Component, NgZone} from '@angular/core';
import {Auth} from '../../services/auth';

@Component({
  selector: 'app-telegram-auth',
  imports: [],
  templateUrl: './telegram-auth.html',
  styleUrl: './telegram-auth.css',
})
export class TelegramAuth {
  // Update this with the numbers before the colon in your bot token
  private readonly botId = '8422376117:AAGviqMcQr882eX8t_mqEFvPTeP4RjzwFAk';

  constructor(
    private ngZone: NgZone,
    private authService: Auth // Inject your Auth service
  ) {}

  loginWithTelegram() {
    if (!(window as any).Telegram) {
      alert("Telegram SDK not loaded.");
      return;
    }

    (window as any).Telegram.Login.auth(
      { bot_id: this.botId, request_access: true },
      (user: any) => {
        if (user) {
          this.ngZone.run(() => {
            // 1. Save user to Service & LocalStorage
            this.authService.login(user);

            // 2. You can now access this user anywhere in the app!
            console.log("Logged in:", this.authService.currentUser());
          });
        }
      }
    );
  }

  private handleRealAuth(user: any) {
    console.log("Real Telegram Data Received:", user);

    // 1. You now have real user data: user.id, user.first_name, user.username
    alert(`Success: Logged in as ${user.first_name}`);

    // 2. Next Step: Send 'user' object to your Hono backend to verify the hash
  }
}
