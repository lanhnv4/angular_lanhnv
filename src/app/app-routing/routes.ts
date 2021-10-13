import { Routes } from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { DiskdetailComponent } from '../diskdetail/diskdetail.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'dishdetail/:id',     component: DiskdetailComponent },
  { path: 'contactus', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];