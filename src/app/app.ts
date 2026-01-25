import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeroSectionOne} from './components/hero-section-one/hero-section-one';
import {HeroSectionTwo} from './components/hero-section-two/hero-section-two';
import {Footer} from './components/footer/footer';
import {Header} from './components/header/header';
import {SocialFloat} from './components/social-float/social-float';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, SocialFloat],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cozy-snippet-clothes');
  // Track which hero section to show
  showSecondDesign = false;

  toggleDesign() {
    this.showSecondDesign = !this.showSecondDesign;
  }
}
