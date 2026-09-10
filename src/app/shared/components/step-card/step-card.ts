import { Component, Input } from '@angular/core';
import { Step } from '../../../core/models/step.model';

@Component({
  selector: 'app-step-card',
  imports: [],
  templateUrl: './step-card.html',
  styleUrl: './step-card.scss'
})
export class StepCard {
  @Input({ required: true }) step!: Step;
}