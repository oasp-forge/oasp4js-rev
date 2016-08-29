import { bootstrap } from '@angular/platform-browser-dynamic';
// import {bootstrap} from 'angular2/platform/browser'
import { enableProdMode } from '@angular/core';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { Oasp4jsSampleAppComponent, environment } from './app/';
//import {disableDeprecatedForms, provideForms} from "@angular/forms";

if (environment.production) {
  enableProdMode();
}

bootstrap(Oasp4jsSampleAppComponent/*,[
  disableDeprecatedForms(),
  provideForms()
]*/);
