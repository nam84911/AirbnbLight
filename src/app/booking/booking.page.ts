import { Component, OnInit } from '@angular/core';
import { Booking } from './booking.model';
import { BookingService } from './booking.service';
import { IonItemSliding, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  bookings:Booking[]
  isLoading=true
  constructor(private loading:LoadingController,private service :BookingService) { }

  ngOnInit() {
    this.isLoading=true
    this.service.bookings.subscribe(bookings=>{
      this.bookings=bookings
      this.isLoading=false
    })
  }
  ionViewWillEnter(){
    this.isLoading=false
    this.service.fetchBooking().subscribe(()=>{
      this.isLoading=false
    })
  }
  onDelete(id:string, slider:IonItemSliding){
    slider.close()
    this.loading.create({message:"Loading"}).then(ctr=>{
      ctr.present()
      this.service.cancelBooking(id).subscribe(()=>{
        ctr.dismiss()
      })
    })
  }

}
