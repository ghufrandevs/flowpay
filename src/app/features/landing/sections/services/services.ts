import { Component } from '@angular/core';
import { ServiceCard } from '../../../../shared/components/service-card/service-card';
import { ScrollReveal } from '../../../../shared/directives/scroll-reveal';
import { SERVICES } from '../../../../data/services.data';

@Component({
  selector: 'app-services',
  imports: [ServiceCard, ScrollReveal],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
  services = SERVICES;
}