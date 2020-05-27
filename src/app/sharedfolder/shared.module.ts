import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapModalComponent } from './map-modal/map-modal.component';
import { LocationPickerComponent } from './picker/location-picker/location-picker.component';
import { IonicModule } from '@ionic/angular';
import { TimePickerComponent } from './picker/time-picker/time-picker.component';

@NgModule({
    imports: [
      CommonModule,
      IonicModule
    ],
    declarations: [MapModalComponent,LocationPickerComponent,TimePickerComponent],
    exports: [MapModalComponent,LocationPickerComponent,TimePickerComponent],
    entryComponents:[MapModalComponent]
  })
export class SharedModule{

}