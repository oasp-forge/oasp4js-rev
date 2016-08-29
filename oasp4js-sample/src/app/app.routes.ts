
import { provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent} from './components/login/view/Login.component';
import { CrudComponent } from './components/crud/view/Crud.component'

export const Routes = [
    {path: "/", component: LoginComponent},
    {path: "/crud", component: CrudComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
