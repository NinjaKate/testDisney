import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import {MatPaginatorModule} from '@angular/material/paginator';
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    MatPaginatorModule,
    HttpClientModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
