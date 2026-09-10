import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrollReveal } from '../../../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, ScrollReveal],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  @Input() isOpen = false;
  @Output() openModalRequest = new EventEmitter<void>();
  @Output() closeModalRequest = new EventEmitter<void>();

  contactForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.isSubmitted = true;
  }

  onOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  close(): void {
    this.isSubmitted = false;
    this.contactForm.reset();
    this.closeModalRequest.emit();
  }
}