import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PointsComponent } from './components/points/points.component';
import { TeamComponent } from './components/team/team.component';

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
        path:'team',
        component: TeamComponent
    }
];
