import { ManagersComponent } from './managers/managers.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/customers',
    pathMatch: 'full'
  },
  {
    path: 'customers',
    component: ManagersComponent
  }
];


export default routes;
