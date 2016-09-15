import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router';
import { Oasp4jsSampleAppComponent } from './app/main/views/main/oasp4js-sample.component';
import { HttpClient } from './app/oasp/oasp-security/http-client.service'
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(Oasp4jsSampleAppComponent, [ROUTER_PROVIDERS,
                                      ROUTER_DIRECTIVES,
                                      HTTP_PROVIDERS,
                                      HttpClient
                                     ]);
