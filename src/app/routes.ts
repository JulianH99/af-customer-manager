import { CustomersComponent } from './customers/customers.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/customers',
    pathMatch: 'full'
  },
  {
    path: 'customers',
    component: CustomersComponent
  }
];


export default routes;
