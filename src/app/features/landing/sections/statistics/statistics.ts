import { Component } from '@angular/core';
import { ScrollReveal } from '../../../../shared/directives/scroll-reveal';
import { AnimatedCounter } from '../../../../shared/directives/animated-counter';
import { STATISTICS } from '../../../../data/statistics.data';

@Component({
  selector: 'app-statistics',
  imports: [ScrollReveal, AnimatedCounter],
  templateUrl: './statistics.html',
  styleUrl: './statistics.scss'
})
export class Statistics {
  statistics = STATISTICS;
}