import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';
import { Hero } from './sections/hero/hero';

@Component({
  selector: 'app-landing',
  imports: [Header, Footer, Hero],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {
  onContactClick(): void {
    // نافذة Contact بنبنيها لاحقًا بالمرحلة المخصصة لها — حاليًا بس نستقبل الحدث
    console.log('Contact clicked — modal will open once Contact section is built');
  }
}