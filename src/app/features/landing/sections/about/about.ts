import { Component } from '@angular/core';
import { LucideEye, LucideTarget } from '@lucide/angular';

@Component({
  selector: 'app-about',
  imports: [LucideTarget, LucideEye],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {}