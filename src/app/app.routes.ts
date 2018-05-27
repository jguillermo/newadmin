import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';


import { ProgressComponent } from './pages/progress/progress.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '**', component: NopagefoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot(  appRoutes, {useHash: true} );
