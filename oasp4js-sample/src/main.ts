import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router';
import { Oasp4jsSampleAppComponent } from './app/main/views/main/oasp4js-sample.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { CrudRestService } from './app/main/views/crud/service/Crud.service.rest';
import { KitchenRestService } from './app/main/views/kitchen/service/Kitchen.service.rest';
import { DetailsRestService } from './app/main/views/details/service/Details.service.rest';

bootstrap(Oasp4jsSampleAppComponent, [ROUTER_PROVIDERS,
                                      ROUTER_DIRECTIVES,
                                      HTTP_PROVIDERS
                                     ]);
