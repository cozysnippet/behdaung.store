import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories-section.html',
  styleUrl: './categories-section.css',
})
export class CategoriesSection implements AfterViewInit {
  // This connects the HTML video tag to this logic
  @ViewChild('promoVideo') videoElement!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = this.videoElement.nativeElement;
          if (entry.isIntersecting) {
            // Best Practice: Play only when user can see it
            video.play().catch(() => {
              console.log("Autoplay prevented by browser");
            });
          } else {
            // Best Practice: Pause and mute when scrolled away
            video.pause();
            video.muted = true;
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the video is visible
    );

    observer.observe(this.videoElement.nativeElement);
  }
}
