import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnduhPage } from './unduh.page';

const routes: Routes = [
  {
    path: '',
    component: UnduhPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnduhPageRoutingModule {}
