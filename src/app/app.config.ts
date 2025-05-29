import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

import { MatNativeDateModule } from '@angular/material/core';   // muss importiert werden für datepicker
import { importProvidersFrom } from '@angular/core';    // muss importiert werden für datepicker

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideAnimationsAsync(),
  provideHttpClient(),
  importProvidersFrom(MatNativeDateModule)]   // muss importiert werden für datepicker
};
