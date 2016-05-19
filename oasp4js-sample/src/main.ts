import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Oasp4jsSampleAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Oasp4jsSampleAppComponent);

