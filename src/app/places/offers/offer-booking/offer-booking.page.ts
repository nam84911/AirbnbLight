import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlaceService } from '../../place.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-offer-booking',
  templateUrl: './offer-booking.page.html',
  styleUrls: ['./offer-booking.page.scss'],
})
export class OfferBookingPage implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    if(this.placeSubscripiton){
      this.placeSubscripiton.unsubscribe()
    }
  }
  place:Place
  placeSubscripiton:Subscription
  constructor(private placeService:PlaceService,private route:ActivatedRoute,private navCtr:NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(p=>{
      if(!p.has('placeId')){
        this.navCtr.navigateBack('places/tabs/offers')
        return
      }
      this.placeSubscripiton=this.placeService.findPlace(p.get('placeId')).subscribe(place=>{
        this.place=place
      })
    })
  }

}
