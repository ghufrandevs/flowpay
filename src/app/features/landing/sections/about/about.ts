import { Component } from '@angular/core';
import { LucideEye, LucideTarget } from '@lucide/angular';
import { ScrollReveal } from '../../../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-about',
  imports: [LucideTarget, LucideEye, ScrollReveal],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {}