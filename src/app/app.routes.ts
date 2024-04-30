import { Routes } from '@angular/router';
import { BookingsComponent } from './components/bookings/bookings.component';
import { CarlistComponent } from './components/carlist/carlist.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'booking',
        pathMatch:'full'
    },
    {
        path:'car',
        component:CarlistComponent
    },
    {
        path:'booking',
        component:BookingsComponent
    }
];
