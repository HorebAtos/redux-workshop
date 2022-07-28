import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { APP_STATE } from './state/app-state';
import { FatherComponent } from './components/father/father.component';
import { ProductListComponent } from './components/father/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(APP_STATE)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
