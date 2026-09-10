import { Component } from '@angular/core';
import { ScrollReveal } from '../../../../shared/directives/scroll-reveal';
import { STATISTICS } from '../../../../data/statistics.data';

@Component({
  selector: 'app-statistics',
  imports: [ScrollReveal],
  templateUrl: './statistics.html',
  styleUrl: './statistics.scss'
})
export class Statistics {
  statistics = STATISTICS;
}