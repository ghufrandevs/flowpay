import { Component } from '@angular/core';
import { StepCard } from '../../../../shared/components/step-card/step-card';
import { ScrollReveal } from '../../../../shared/directives/scroll-reveal';
import { STEPS } from '../../../../data/steps.data';

@Component({
  selector: 'app-how-it-works',
  imports: [StepCard, ScrollReveal],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.scss'
})
export class HowItWorks {
  steps = STEPS;
}