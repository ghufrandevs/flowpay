import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Services } from './sections/services/services';
import { Statistics } from './sections/statistics/statistics';
import { HowItWorks } from './sections/how-it-works/how-it-works';
import { Faq } from './sections/faq/faq';

@Component({
  selector: 'app-landing',
  imports: [Header, Footer, Hero, About, Services, Statistics, HowItWorks, Faq],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {
  onContactClick(): void {
    console.log('Contact clicked — modal will open once Contact section is built');
  }
}