import { Component, EventEmitter, Output, signal } from '@angular/core';

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

  scrollTo(sectionId: string): void {
    this.isMenuOpen.set(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  onContactClick(event: Event): void {
    event.preventDefault();
    this.isMenuOpen.set(false);
    this.contactClick.emit();
  }
}