import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PointsComponent } from './components/points/points.component';
import { AddPointComponent } from './components/points/add-point/add-point.component';

export const routes: Routes = [{
    path:'',
    component: HomeComponent
    },{
        path:'login',
        component: LoginComponent
    },{
        path:'points',
        component: PointsComponent
    },{
        path:'addpoints',
        component: AddPointComponent
    }
];
