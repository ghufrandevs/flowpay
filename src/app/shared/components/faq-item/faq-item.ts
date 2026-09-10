import { Component, Input, signal } from '@angular/core';
import { LucideChevronDown } from '@lucide/angular';
import { Faq } from '../../../core/models/faq.model';

@Component({
  selector: 'app-faq-item',
  imports: [LucideChevronDown],
  templateUrl: './faq-item.html',
  styleUrl: './faq-item.scss'
})
export class FaqItem {
  @Input({ required: true }) faq!: Faq;

  isOpen = signal(false);

  toggle(): void {
    this.isOpen.update(open => !open);
  }
}