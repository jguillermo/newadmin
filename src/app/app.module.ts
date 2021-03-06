import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// Rutas
import {APP_ROUTES} from './app.routes';
// Module
import {PagesModule} from './pages/pages.module';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {NopagefoundComponent} from './nopagefound/nopagefound.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
