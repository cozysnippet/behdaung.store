import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside class="hidden lg:block w-72 flex-shrink-0">
      <div class="sticky top-32 space-y-12">
        <div>
          <h1 class="text-3xl font-bold font-khmer-body mb-10 text-black">ទិញទំនិញ</h1>
          <h4 class="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6 font-bold">ប្រភេទ (Categories)</h4>
          <ul class="space-y-5">
            @for (cat of categories; track cat) {
              <li (click)="onSelect.emit(cat)"
                  [class.text-black]="activeCategory === cat"
                  [class.font-bold]="activeCategory === cat"
                  [class.pl-4]="activeCategory === cat"
                  [class.border-l-2]="activeCategory === cat"
                  class="text-[13px] font-medium border-black cursor-pointer hover:text-black/50 transition-all">
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
