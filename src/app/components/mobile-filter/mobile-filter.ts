import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-filter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed inset-0 z-[150] bg-black/40 backdrop-blur-sm lg:hidden" (click)="onClose.emit()">
      <div class="absolute bottom-0 left-0 right-0 bg-white rounded-t-[40px] p-8 pb-12 animate-slide-up" (click)="$event.stopPropagation()">
        <div class="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-8"></div>

        <div class="mb-8">
          <h4 class="text-lg font-bold text-black font-khmer-body">ចម្រាញ់ផលិតផល</h4>
          <p class="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Category Selection</p>
        </div>

        <div class="space-y-3">
          @for (cat of categories; track cat) {
            <button (click)="onSelect.emit(cat)"
                    [class.bg-black]="activeCategory === cat"
                    [class.text-white]="activeCategory === cat"
                    class="w-full py-4 px-6 border border-gray-100 rounded-2xl text-[12px] font-bold text-left transition-all">
              {{ cat }}
            </button>
          }
        </div>

        <button (click)="onClose.emit()" class="w-full mt-8 py-5 bg-black text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-2xl">
          រួចរាល់ (Show Results)
        </button>
      </div>
    </div>
  `,
  styles: [`
    .animate-slide-up { animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1); }
    @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
  `]
})
export class MobileFilter {
  @Input() categories: string[] = [];
  @Input() activeCategory: string = '';
  @Output() onSelect = new EventEmitter<string>();
  @Output() onClose = new EventEmitter<void>();
}
