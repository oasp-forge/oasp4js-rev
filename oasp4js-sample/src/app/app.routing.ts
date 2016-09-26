import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './main/components/login/login.component'
import { CrudComponent } from './main/components/crud/view/Crud.component'
import { KitchenComponent } from './main/components/kitchen/view/Kitchen.component'

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

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
