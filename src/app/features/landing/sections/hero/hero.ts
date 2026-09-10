import { Component, EventEmitter, Output } from '@angular/core';
import { ScrollReveal } from '../../../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-hero',
  imports: [ScrollReveal],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  @Output() contactClick = new EventEmitter<void>();

  onContactClick(): void {
    this.contactClick.emit();
  }

  scrollToServices(): void {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}