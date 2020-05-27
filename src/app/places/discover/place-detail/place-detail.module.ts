import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceDetailPageRoutingModule } from './place-detail-routing.module';

import { PlaceDetailPage } from './place-detail.page';
import { CreateBookingComponent } from 'src/app/booking/create-booking/create-booking.component';
import { SharedModule } from 'src/app/sharedfolder/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PlaceDetailPageRoutingModule
  ],
  declarations: [PlaceDetailPage,CreateBookingComponent],
  entryComponents:[CreateBookingComponent]
})
export class PlaceDetailPageModule {}
