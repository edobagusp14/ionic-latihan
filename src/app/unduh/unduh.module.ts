import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnduhPageRoutingModule } from './unduh-routing.module';

import { UnduhPage } from './unduh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnduhPageRoutingModule
  ],
  declarations: [UnduhPage]
})
export class UnduhPageModule {}
