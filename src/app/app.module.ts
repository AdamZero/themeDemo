import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { AppRouter } from 'src/route/app-router';
import { CommonModule } from '@angular/common';
import { Page3Component } from './pages/page3/page3.component';
import { ThemeService } from 'src/services/theme';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component
  ],
  imports: [
    BrowserModule,
    AppRouter,
    CommonModule,
  ],
  providers: [
    ThemeService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
