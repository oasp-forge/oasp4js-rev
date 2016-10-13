import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { OaspModule } from './oasp/oasp.module';

import { CrudComponent } from './main/components/crud/view/Crud.component';
import { DetailsComponent } from './main/components/details/view/Details.component';
import { HeaderComponent } from './main/components/header/Header.component';
import { KitchenComponent } from './main/components/kitchen/view/Kitchen.component';
import { LoginComponent } from './main/components/login/Login.component';
import { NotFoundComponent } from './main/components/not-found/not-found.component';
import { Oasp4jsSampleAppComponent } from './main/components/main/oasp4js-sample.component';

import { CrudRestService } from './main/components/crud/service/Crud.service.rest';
import { DetailsRestService } from './main/components/details/service/Details.service.rest';
import { KitchenRestService } from './main/components/kitchen/service/Kitchen.service.rest';


@NgModule({
  declarations: [
    Oasp4jsSampleAppComponent,
    CrudComponent,
    DetailsComponent,
    HeaderComponent,
    KitchenComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    OaspModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    CrudRestService,
    DetailsRestService,
    KitchenRestService,
  ],
  bootstrap: [Oasp4jsSampleAppComponent]
})
export class AppModule { }
