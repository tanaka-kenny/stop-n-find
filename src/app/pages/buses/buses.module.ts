import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusesPageRoutingModule } from './buses-routing.module';

import { BusesPage } from './buses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusesPageRoutingModule
  ],
  declarations: [BusesPage]
})
export class BusesPageModule {}
