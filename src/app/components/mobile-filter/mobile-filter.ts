import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-filter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed inset-0 z-[100] bg-black/20 backdrop-blur-sm lg:hidden" (click)="onClose.emit()">
      <div class="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-8 space-y-8 animate-slide-up" (click)="$event.stopPropagation()">
        <div class="w-12 h-1 bg-gray-100 rounded-full mx-auto mb-4"></div>
        <h4 class="text-xs uppercase tracking-[0.3em] font-bold text-center">Filter By Category</h4>
        <div class="grid grid-cols-2 gap-3">
          @for (cat of categories; track cat) {
            <button (click)="onSelect.emit(cat)"
                    [class.bg-black]="activeCategory === cat"
                    [class.text-white]="activeCategory === cat"
                    class="py-4 border border-gray-100 text-[10px] uppercase tracking-widest transition-colors">
              {{ cat }}
            </button>
          }
        </div>
        <button (click)="onClose.emit()" class="w-full py-5 bg-black text-white text-[10px] uppercase tracking-[0.3em] font-bold">
          Show Results
        </button>
      </div>
    </div>
  `,
  styles: [`
    .animate-slide-up { animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
    @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
  `]
})
export class MobileFilter {
  @Input() categories: string[] = [];
  @Input() activeCategory: string = '';
  @Output() onClose = new EventEmitter<void>();
  @Output() onSelect = new EventEmitter<string>();
}
