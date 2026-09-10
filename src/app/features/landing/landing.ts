import { Component, signal } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Services } from './sections/services/services';
import { Statistics } from './sections/statistics/statistics';
import { HowItWorks } from './sections/how-it-works/how-it-works';
import { Faq } from './sections/faq/faq';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-landing',
  imports: [Header, Footer, Hero, About, Services, Statistics, HowItWorks, Faq, Contact],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {
  isContactModalOpen = signal(false);

  openContactModal(): void {
    this.isContactModalOpen.set(true);
  }

  closeContactModal(): void {
    this.isContactModalOpen.set(false);
  }
}