import { Directive, ElementRef, Input, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appAnimatedCounter]'
})
export class AnimatedCounter implements OnInit {
  private el = inject(ElementRef);

  @Input({ required: true }) appAnimatedCounter!: number;
  @Input() decimals = 0;
  @Input() suffix = '';

  ngOnInit(): void {
    const element = this.el.nativeElement as HTMLElement;
    const target = this.appAnimatedCounter;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animate(element, target);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
  }

  private animate(element: HTMLElement, target: number): void {
    let current = 0;
    const step = target / 40;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = current.toFixed(this.decimals) + this.suffix;
    }, 30);
  }
}