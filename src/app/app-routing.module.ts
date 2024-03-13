import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreaDataComponent } from './components/crea-data/crea-data.component';
import { ResultadoComponent } from './components/resultado/resultado.component';

const routes: Routes = [
  {
    path: '',
    component: CreaDataComponent
  },
  {
    path: 'resultado',
    component: ResultadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
