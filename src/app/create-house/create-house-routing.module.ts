import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateHousePage } from './create-house.page';

const routes: Routes = [
  {
    path: '',
    component: CreateHousePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateHousePageRoutingModule {}
