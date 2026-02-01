import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-announcement-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './announcement-bar.html',
  styleUrl: './announcement-bar.css',
})
export class AnnouncementBar {}
