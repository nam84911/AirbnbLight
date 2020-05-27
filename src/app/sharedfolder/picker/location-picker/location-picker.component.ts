import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalController, ActionSheetController, AlertController } from '@ionic/angular';
import { MapModalComponent } from '../../map-modal/map-modal.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {switchMap,map} from'rxjs/operators'
import {of} from 'rxjs'
import { PlaceLocation, Coordinate } from 'src/app/places/placeLocation.model';
import {Plugins, Capacitor} from '@capacitor/core'
@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss'],
})
export class LocationPickerComponent implements OnInit {
  @Output() pickLocation=new EventEmitter<PlaceLocation>()
  selectedURL:string=null
  isloading=false
  constructor(private http:HttpClient,
              private ctr:ModalController,
              private action:ActionSheetController,
              private alert:AlertController
              ) { }

  ngOnInit() {}
  private toAddress(lat:number,lng:number){
      return this.http.get<any>(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${environment.googleApiKey}`).pipe(map(data=>{
        if(data==null||!data.results||data.results.length==0){
          return null
        }
        return data.results[0].formatted_address
      }))
  }
  onClickLocation(){
    this.action.create({header:"Location Options",buttons:[
      {
        text:"Auto-Locate",
        handler:()=>{this.locateUser()}
      },{
        text:"Manual Location",
        handler:()=>{this.openMap()}
      },{
        text:"Canvel",
        role:"cancel"
      }]
    }).then(ctr=>{ctr.present()})
  }
  private locateUser(){
    if(Capacitor.isPluginAvailable('Geolocation')){
      Plugins.Geolocation.getCurrentPosition().then(location=>{
        const loc:Coordinate={lat:location.coords.latitude,lng:location.coords.longitude}
        this.createMap(loc.lat,loc.lng)
      }).catch(err=>{console.log(err)})
    }else{
      this.alert.create({header:"Can't find location",
                        message:"We can't find your location",buttons:['Okey']}).then(ctr=>{ctr.present()})
    }
  }
  private openMap(){
    this.ctr.create({component:MapModalComponent}).then(controller=>{
      controller.present()
      controller.onDidDismiss().then(data=>{
        this.createMap(data.data.lat,data.data.lng)
      })
    })
  }
  private createMap(lat:number,lng:number){
    const place:PlaceLocation={
      lat:lat,
      lng:lng,
      address:null,
      imageURL:null
    }
    this.toAddress(lat,lng).pipe(switchMap(address=>{
      place.address=address
      this.isloading=true
      return of(this.getImage(place.lat,place.lng,18))
    })).subscribe(url=>{
      place.imageURL=url
      this.selectedURL=url
      this.isloading=false
      this.pickLocation.emit(place)
    })
  }
  private getImage(lat:number,lng:number,zoom:number){
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=500x300&maptype=roadmap&markers=color:red%7Clabel:Place%7C${lat},${lng}&key=${environment.googleApiKey}`
  }

}
