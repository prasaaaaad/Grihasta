import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NearbyServicesPage } from './nearby-services.page';

const routes: Routes = [
  {
    path: '',
    component: NearbyServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NearbyServicesPageRoutingModule {}
