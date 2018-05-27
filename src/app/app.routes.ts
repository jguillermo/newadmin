import { RouterModule, Routes } from '@angular/router';

import { ProgressComponent } from './pages/progress/progress.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const appRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: LoginComponent},
    {path: 'progress', component: ProgressComponent},
    {path: 'graficas1', component: Graficas1Component},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: '**', component: NopagefoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot(  appRoutes, {useHash: true} );
