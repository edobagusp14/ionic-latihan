import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResepPageRoutingModule } from './resep-routing.module';

import { ResepPage } from './resep.page';
import { DetailComponent } from './detail/detail.component';
const routes: Routes = [
{
path:'',
component: ResepPage
},
{
  path:':id',
  component: DetailComponent
  }

]



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResepPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResepPage, DetailComponent]
})
export class ResepPageModule {}
