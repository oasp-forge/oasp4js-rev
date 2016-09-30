import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from '../config/environment';
import { AppModule } from './app/';
// if (environment.production) {
//   enableProdMode();
// }
enableProdMode()

platformBrowserDynamic().bootstrapModule(AppModule);
