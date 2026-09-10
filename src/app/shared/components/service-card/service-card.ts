import { Component, Input } from '@angular/core';
import { LucideDynamicIcon, LucideArrowRight } from '@lucide/angular';
import { Service } from '../../../core/models/service.model';

@Component({
  selector: 'app-service-card',
  imports: [LucideDynamicIcon, LucideArrowRight],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss'
})
export class ServiceCard {
  @Input({ required: true }) service!: Service;
  @Input() accent = false;
}