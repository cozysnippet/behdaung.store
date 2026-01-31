import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside class="hidden lg:block w-64 flex-shrink-0">
      <div class="sticky top-32 space-y-10">
        <div>
          <h1 class="text-3xl font-light uppercase tracking-widest font-khmer-body mb-8">Shop All</h1>
          <h4 class="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6 font-bold">Categories</h4>
          <ul class="space-y-4">
            @for (cat of categories; track cat) {
              <li (click)="onSelect.emit(cat)"
                  [class.text-black]="activeCategory === cat"
                  [class.font-bold]="activeCategory === cat"
                  class="text-[11px] uppercase tracking-widest cursor-pointer hover:text-gray-400 transition-colors">
                {{ cat }}
              </li>
            }
          </ul>
        </div>
      </div>
    </aside>
  `
})
export class FilterSidebar {
  @Input() categories: string[] = [];
  @Input() activeCategory: string = '';
  @Output() onSelect = new EventEmitter<string>();
}
