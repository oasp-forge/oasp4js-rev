import { bootstrap } from '@angular/platform-browser-dynamic';
// import {bootstrap} from 'angular2/platform/browser'
import { enableProdMode } from '@angular/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router';
import { Oasp4jsSampleAppComponent, environment } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';
import { CrudRestService } from './app/components/crud/service/Crud.service.rest';
//import {disableDeprecatedForms, provideForms} from "@angular/forms";

if (environment.production) {
  enableProdMode();
}

bootstrap(Oasp4jsSampleAppComponent, [ROUTER_PROVIDERS, ROUTER_DIRECTIVES, HTTP_PROVIDERS, CrudRestService])
  .catch(err => console.error(err));
