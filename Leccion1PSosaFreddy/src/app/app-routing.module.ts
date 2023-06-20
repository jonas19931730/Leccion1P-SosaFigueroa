import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  
    {
      path:'app',
      loadChildren: ()=> import('./pages/pages.module').then(m=>m.PagesModule)
    },
    {
      path:'',
      redirectTo:'app/main',
      pathMatch:'full'
    },
    {
      path:'**',
      redirectTo:'app/main',
      pathMatch:'full'
    }
];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes),
    PagesModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
