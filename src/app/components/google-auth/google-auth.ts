import { Component, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const google: any;

@Component({
  selector: 'app-google-auth',
  standalone: true,
  imports: [], // Ensure HttpClient is available
  templateUrl: './google-auth.html',
  styleUrl: './google-auth.css',
})
export class GoogleAuth implements OnInit {
  // Use a Signal to manage state (like a reactive variable in Spring)
  authState = signal<{ loading: boolean; loggedIn: boolean; error: string | null }>({
    loading: false,
    loggedIn: false,
    error: null
  });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Check if the script is already loaded
    if (typeof google !== 'undefined' && google.accounts) {
      this.initializeGoogleAuth();
    } else {
      // If not, wait a moment and try again, or better yet,
      // hook into the script's onload event if you are dynamically loading it.
      // A simple 'poll' or delay is the quick developer fix:
      const interval = setInterval(() => {
        if (typeof google !== 'undefined' && google.accounts) {
          this.initializeGoogleAuth();
          clearInterval(interval);
        }
      }, 100); // Check every 100ms
    }
  }

// Move your logic into a separate method
  initializeGoogleAuth(): void {
    google.accounts.id.initialize({
      client_id: '1033905964260-am2i43nq81pcbjaahfffgm3ii02e2q98.apps.googleusercontent.com',
      auto_select: true,
      use_fedcm_for_prompt: true,
      itp_support: true,
      callback: (response: any) => this.handleLogin(response.credential),
      context: 'signin',
      ux_mode: 'popup',
    } as any);

    const buttonElement = document.getElementById('google-btn');
    if (buttonElement) {
      // inside initializeGoogleAuth()
      google.accounts.id.renderButton(buttonElement, {
        type: 'standard',
        shape: 'pill',
        theme: 'outline',
        size: 'large',
        logo_alignment: 'left'
      });
    }

    google.accounts.id.prompt();
  }

  handleLogin(idToken: string) {
    this.authState.set({ loading: true, loggedIn: false, error: null });

    // 3. Send the token to your Hono API
    this.http.post('http://localhost:3000/auth/google', { idToken })
      .subscribe({
        next: (res: any) => {
          console.log('Login Successful:', res);
          localStorage.setItem('token', res.token);
          this.authState.set({ loading: false, loggedIn: true, error: null });
        },
        error: (err) => {
          console.error('Auth Error:', err);
          this.authState.set({ loading: false, loggedIn: false, error: 'Authentication Failed' });
        }
      });
  }


}
