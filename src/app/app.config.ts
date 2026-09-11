import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideLucideIcons, LucideCreditCard, LucideSend, LucideStore, LucideReceipt, LucideWallet, LucidePlug, LucideTarget, LucideEye, LucideArrowRight, LucideChevronDown } from '@lucide/angular';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideLucideIcons(
      LucideCreditCard,
      LucideSend,
      LucideStore,
      LucideReceipt,
      LucideWallet,
      LucidePlug,
      LucideTarget,
      LucideEye,
      LucideArrowRight,
      LucideChevronDown
    )
  ]
};