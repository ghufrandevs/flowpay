import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Services } from './sections/services/services';

@Component({
  selector: 'app-landing',
  imports: [Header, Footer, Hero, About, Services],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {
  onContactClick(): void {
    console.log('Contact clicked — modal will open once Contact section is built');
  }
}