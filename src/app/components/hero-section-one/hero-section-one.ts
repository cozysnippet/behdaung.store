import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
  isForward = true; // Tracks direction: true = 1->2->3, false = 3->2->1
  private autoScrollInterval: any;

  products = [
    { id: 201, img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200' },
    { id: 202, img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200' },
    { id: 203, img: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.startAutoScroll();
  }

  onScroll() {
    const el = this.slider.nativeElement;
    const slideWidth = el.offsetWidth * 0.9;
    this.currentSlide = Math.round(el.scrollLeft / slideWidth);
  }

  scrollToSlide(index: number) {
    const el = this.slider.nativeElement;
    const slideWidth = el.offsetWidth * 0.9;
    el.scrollTo({ left: index * slideWidth, behavior: 'smooth' });
  }

  goToProduct(id: number) {
    this.router.navigate(['/product', id]);
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      const el = this.slider.nativeElement;
      if (!el) return;

      const slideWidth = el.offsetWidth * 0.9;
      const atEnd = el.scrollLeft + el.offsetWidth >= el.scrollWidth - 50;
      const atStart = el.scrollLeft <= 10;

      // Logic for forward and back loop
      if (atEnd) {
        this.isForward = false;
      } else if (atStart) {
        this.isForward = true;
      }

      if (this.isForward) {
        el.scrollBy({ left: slideWidth, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: -slideWidth, behavior: 'smooth' });
      }
    }, 4000); // 4 seconds interval for smoother feel
  }

  ngOnDestroy() {
    if (this.autoScrollInterval) clearInterval(this.autoScrollInterval);
  }
}
