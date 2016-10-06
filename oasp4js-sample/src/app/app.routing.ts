import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './main/components/login/Login.component'
import { CrudComponent } from './main/components/crud/view/Crud.component'
import { KitchenComponent } from './main/components/kitchen/view/Kitchen.component'
import { NotFoundComponent } from './main/components/not-found/not-found.component'

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/Login',
    pathMatch: 'full'
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Tables',
    component: CrudComponent
  },
  {
    path: 'Kitchen',
    component: KitchenComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
