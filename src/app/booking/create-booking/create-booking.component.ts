import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Place } from 'src/app/places/place.model';
import { ModalController, IonSelect } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace:Place
  @Input() selectedMode:string
  @ViewChild('f',{ static: true }) f:NgForm
  @ViewChild('select',{ static: true }) select:IonSelect
  endDate:Date
  start:Date
  form={first:"",last:""}
  constructor(private modalCtr:ModalController) { }

  ngOnInit() {
    if(this.selectedMode=="Random"){
      this.start=this.selectedPlace.from
      this.endDate=this.selectedPlace.to
    }
  }

  onBook(){
    if(!this.f.valid|| !this.checkValid()) {
      return
    }
  
    this.modalCtr.dismiss({bookingData:{
      first:this.f.value['first'],
      last:this.f.value['last'],
      num:this.select.value,
      from:this.f.value['availible'],
      to:this.f.value['to']
    }},'book')
  }
  onCancel(){
    this.modalCtr.dismiss(null,'cancel')
  }
  checkValid():boolean{
    return this.f.value['availible']<this.f.value['to']
  }
  checkStart():boolean{
    return this.f.value['availible']!=null
  }

}
