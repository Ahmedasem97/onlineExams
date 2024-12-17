import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideServiceWorker } from '@angular/service-worker';
import { MessageService } from 'primeng/api';
import { provideAnimations } from '@angular/platform-browser/animations';
import { tokenHeadersApiInterceptor } from './core/interceptors/token-headers-api.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([tokenHeadersApiInterceptor])),
    provideServiceWorker('ngsw-worker.js',
      {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
      }), MessageService,
    provideAnimations()]
};
