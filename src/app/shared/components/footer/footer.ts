import { Component, EventEmitter, Output } from '@angular/core';
import { scrollToSection } from '../../utils/scroll';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  currentYear = new Date().getFullYear();

  @Output() contactClick = new EventEmitter<void>();

  scrollTo(sectionId: string, event: Event): void {
    event.preventDefault();
    scrollToSection(sectionId);
  }

  onContactClick(): void {
    this.contactClick.emit();
  }
}