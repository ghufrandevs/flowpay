import { Component } from '@angular/core';
import { FaqItem } from '../../../../shared/components/faq-item/faq-item';
import { ScrollReveal } from '../../../../shared/directives/scroll-reveal';
import { FAQS } from '../../../../data/faqs.data';

@Component({
  selector: 'app-faq',
  imports: [FaqItem, ScrollReveal],
  templateUrl: './faq.html',
  styleUrl: './faq.scss'
})
export class Faq {
  faqs = FAQS;
}