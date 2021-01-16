import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClubhousePage } from './clubhouse.page';

const routes: Routes = [
  {
    path: '',
    component: ClubhousePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubhousePageRoutingModule {}
