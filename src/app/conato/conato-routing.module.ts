import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConatoPage } from './conato.page';

const routes: Routes = [
  {
    path: '',
    component: ConatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConatoPageRoutingModule {}
