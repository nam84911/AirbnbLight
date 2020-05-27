import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, ModalController, ActionSheetController, LoadingController, PickerController } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { CreateBookingComponent } from 'src/app/booking/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { ActivatedRoute } from '@angular/router';
import { PlaceService } from '../../place.service';
import {Subscription} from 'rxjs'
import { AuthService } from 'src/app/auth/auth.service';
import { BookingService } from 'src/app/booking/booking.service';
import { MapModalComponent } from 'src/app/sharedfolder/map-modal/map-modal.component';
import {tap,map,take, switchMap} from'rxjs/operators'
@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit,OnDestroy {
  bookeble=true
  ngOnDestroy(): void {
    if(this.placeSubscription){
      this.placeSubscription.unsubscribe()
    }
  }
  place:Place
  isLoading=true
  placeSubscription:Subscription
  constructor(private loadingCtr:LoadingController,private bookingService:BookingService,private action:ActionSheetController,private placeSerive:PlaceService,private modalCtr:ModalController ,private navController:NavController,private navCtr:NavController,private activateRouter:ActivatedRoute,private auth:AuthService) { }

  ngOnInit() {
    this.activateRouter.paramMap.pipe(switchMap(p=>{
      if(!p.has('placeId')){
        this.navCtr.navigateBack('places/tabs/offers')
        return
      }
      this.placeSubscription=this.placeSerive.findPlace(p.get('placeId')).subscribe(place=>{
        this.place=place
        console.log("in1")
        this.isLoading=false
      })
      return this.auth.userId
    }),tap(id=>{
      console.log("in2")
      this.bookeble=id!=this.place.userId
    })).subscribe()
  }
  onBook(){
    this.action.create({header:"Action",
                        buttons:[
                          {
                            text:"Select Date",
                            handler:()=>this.modalCreation("Select")
                          },
                          {
                            text:"Stay for the full time",
                            handler:()=>this.modalCreation("Random")
                          },{
                            text:"Cancel",
                            role:'cancel'
                          }
                        ]}).then(ctr=>{
                          ctr.present()
                        })
  }
  openControl(){
    this.modalCtr.create({component:MapModalComponent,
                  componentProps:{selectable:false,loc:{
                    lat:this.place.location.lat,lng:this.place.location.lng
                  },title:"Check Location"}}).then(ctr=>{
      ctr.present()
    })
  }
  modalCreation(mode:'Select'|'Random'){
    if(mode!='Select'&&mode!='Random'){
      return
    }
    this.modalCtr.create({component:CreateBookingComponent,
      componentProps:{selectedPlace:this.place,selectedMode:mode}}
      ).then(m=>{
        m.present()
        return m.onDidDismiss()
      }).then(result=>{
        if(result.role=='cancel') {
          return
        }
        else{this.loadingCtr.create({message:"Loading..."}).then(ctr=>{
          ctr.present()
          this.bookingService.addBooking(Math.random().toString,
          this.place.id,
          null,
          this.place.title,
          +result.data['bookingData']['num'],
          result.data['bookingData']['first'],
          result.data['bookingData']['last'],
          this.place.photoURL,
          new Date(result.data['bookingData']['from']),
          new Date(result.data['bookingData']['to'])).subscribe(()=>{
            ctr.dismiss()
          })
        })}
      })
  }
  isBookable(){
   this.auth.userId.pipe(take(1),map(id=>{
      return id!=this.place.userId
  })).subscribe(bool=>{
    console.log(bool)
    this.bookeble= bool
  })
}
}
