import { Component, EventEmitter, Output, signal } from '@angular/core';
import { scrollToSection } from '../../utils/scroll';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Output() contactClick = new EventEmitter<void>();

  isMenuOpen = signal(false);

  toggleMenu(): void {
    this.isMenuOpen.update(open => !open);
  }

  scrollTo(sectionId: string, event: Event): void {
    event.preventDefault();
    this.isMenuOpen.set(false);
    scrollToSection(sectionId);
  }

  onContactClick(): void {
    this.isMenuOpen.set(false);
    this.contactClick.emit();
  }
}