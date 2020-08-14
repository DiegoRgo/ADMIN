import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos creados
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

//Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaginadorComponent } from '../components/paginador/paginador.component';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    PagesComponent,
    PaginadorComponent,
    DashboardComponent,
  ],
  exports: [
    PagesComponent,
    PaginadorComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
