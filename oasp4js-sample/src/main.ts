import { bootstrap } from '@angular/platform-browser-dynamic';
// import {bootstrap} from 'angular2/platform/browser'
import { enableProdMode } from '@angular/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router';
import { Oasp4jsSampleAppComponent, environment } from './app/';
//import {disableDeprecatedForms, provideForms} from "@angular/forms";

if (environment.production) {
  enableProdMode();
}


bootstrap(Oasp4jsSampleAppComponent, [ROUTER_PROVIDERS, ROUTER_DIRECTIVES])
  .catch(err => console.error(err));
