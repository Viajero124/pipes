import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
//modulo Perzonalizado
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//cambiar el local de la app
import localEs from '@angular/common/locales/es-UY'
import localFr from '@angular/common/locales/fr'

import { registerLocaleData } from '@angular/common';
registerLocaleData (localEs);
registerLocaleData (localFr);



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    PrimeNgModule ,
    AppRouterModule,
    VentasModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:'es-UY'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
