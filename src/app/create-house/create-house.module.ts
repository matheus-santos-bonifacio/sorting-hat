import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateHousePageRoutingModule } from './create-house-routing.module';

import { CreateHousePage } from './create-house.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateHousePageRoutingModule
  ],
  declarations: [CreateHousePage]
})
export class CreateHousePageModule {}
