import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaDonantesComponent } from './lista-donantes/lista-donantes.component';
import { Route, RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { InfoDesarrolladorComponent } from './info-desarrollador/info-desarrollador.component';
import { HomeComponent } from './home/home.component';

const routes:Route[] = [
  {
    path:'main',
    component:MainComponent,
    children:[
      {
        path:'',
        component:HomeComponent
      },
      {
        path: 'donantes',
        component : ListaDonantesComponent
      },
      {
        path:'contacto',
        component:InfoDesarrolladorComponent
      }
    ]
  },
]

@NgModule({
  declarations: [
    ListaDonantesComponent,
    MainComponent,
    InfoDesarrolladorComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    SharedModule
  ]
})
export class PagesModule { }
