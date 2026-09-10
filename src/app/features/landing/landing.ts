import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-landing',
  imports: [Header, Footer],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {}