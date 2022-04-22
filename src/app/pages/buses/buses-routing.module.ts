import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusesPage } from './buses.page';

const routes: Routes = [
  {
    path: '',
    component: BusesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusesPageRoutingModule {}
