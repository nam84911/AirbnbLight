import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { PlaceService } from '../place.service';
import { Place } from '../place.model';
import {SegmentChangeEventDetail} from'@ionic/core'
import {Subscription} from 'rxjs'
import { ThrowStmt } from '@angular/compiler';
import { AuthService } from 'src/app/auth/auth.service';
import { IonSegment } from '@ionic/angular';
import{take} from 'rxjs/operators'
@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit,OnDestroy {
  @ViewChild('segment',{static:true}) segment:IonSegment
  places:Place[]
   allPlaces:Place[]
   isLoading=true
   placesSubscription:Subscription
  constructor(private placeService:PlaceService,private authService:AuthService) { }
  ionViewWillEnter(){
    if(this.segment.value=='all'){
      this.places=this.allPlaces
    }else if(this.segment.value=='bookable'){
      this.authService.userId.pipe(take(1)).subscribe(id=>{
        this.places=this.allPlaces.filter(p=>p.userId!=id)
      })
    }
    this.placeService.fetchData().subscribe(()=>{
      this.isLoading=false
    })
  }
  ngOnInit() {
    this.placesSubscription=this.placeService.places.subscribe(places=>{
      this.allPlaces=places
      this.places=this.allPlaces
    })
  }
  onChange(event:CustomEvent<SegmentChangeEventDetail>){
    if(event.detail.value=='all'){
      this.places=this.allPlaces
    }else if(event.detail.value=='bookable'){
      this.authService.userId.pipe(take(1)).subscribe(id=>{
        this.places=this.allPlaces.filter(p=>p.userId!=id)
      })   
     }

  }
  ngOnDestroy(): void {
    if(this.placesSubscription){
      this.placesSubscription.unsubscribe()
}     
  }
}
