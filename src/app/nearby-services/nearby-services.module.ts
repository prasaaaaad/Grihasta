import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearbyServicesPageRoutingModule } from './nearby-services-routing.module';

import { NearbyServicesPage } from './nearby-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearbyServicesPageRoutingModule
  ],
  declarations: [NearbyServicesPage]
})
export class NearbyServicesPageModule {}
