import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-hero-section-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section-one.html',
  styleUrl: './hero-section-one.css',
})
export class HeroSectionOne implements OnInit, OnDestroy {
  @ViewChild('heroSlider') slider!: ElementRef;
  currentSlide = 0;
  private autoScrollInterval: any;

  constructor(private router: Router) {} // Inject Router

  ngOnInit() {
    this.startAutoScroll();
  }

  onScroll() {
    const el = this.slider.nativeElement;
    // Calculate slide based on the scroll width divided by number of slides
    const slideWidth = el.scrollWidth / 3;
    this.currentSlide = Math.round(el.scrollLeft / slideWidth);
  }

  scrollToSlide(index: number) {
    const el = this.slider.nativeElement;
    const slideWidth = el.scrollWidth / 3;
    el.scrollTo({ left: index * slideWidth, behavior: 'smooth' });
  }

  // Navigate to your product page
  goToProduct(id: number) {
    this.router.navigate(['/product', id]);
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      const el = this.slider.nativeElement;
      if (!el) return;

      const slideWidth = el.scrollWidth / 3;
      if (el.scrollLeft + el.offsetWidth >= el.scrollWidth - 50) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: slideWidth, behavior: 'smooth' });
      }
    }, 5000);
  }

  ngOnDestroy() {
    if (this.autoScrollInterval) clearInterval(this.autoScrollInterval);
  }
}
