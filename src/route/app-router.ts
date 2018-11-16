import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Page1Component } from 'src/app/page1/page1.component';
import { Page2Component } from 'src/app/page2/page2.component';

const routers: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: '', redirectTo: '/page1', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routers)],
  exports: [RouterModule]
})
export class AppRouter { }
