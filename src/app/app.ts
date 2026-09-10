import { Component } from '@angular/core';
import { Landing } from './features/landing/landing';

@Component({
  selector: 'app-root',
  imports: [Landing],
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}