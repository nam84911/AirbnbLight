import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../place.service';
import { Place } from '../place.model';
import { MenuController, IonItemSliding } from '@ionic/angular';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  places:Place[]
  isLoading=true
  placesSubscription:Subscription
  constructor(private router:Router,private menu: MenuController,private placeService:PlaceService) { }

  ngOnInit() {
    this.placesSubscription=this.placeService.places.subscribe(places=>{
      this.places=places
    })
    this.placeService.fetchData().subscribe()
  }
  ionViewWillEnter(){
    this.placeService.fetchData().subscribe(()=>{
      this.isLoading=false
    })
  }
  onEdit(id:String,sliding:IonItemSliding){
    sliding.close()
    this.router.navigate(['/','places','tabs','offers','edit',id])
  }
  ngOnDestroy(): void {
    if(this.placesSubscription){
          this.placesSubscription.unsubscribe()
    }     
  }
}
