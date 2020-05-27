import { Component, OnInit, AfterViewInit, ViewChild, ElementRef ,Renderer2, OnDestroy, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss'],
})
export class MapModalComponent implements OnInit,AfterViewInit,OnDestroy {
  @Input() selectable=true
  @Input() loc={lat:-34.397,lng:150.644}
  @Input() title="Pick a location"
  ngOnDestroy(): void {
    this.googleMap.event.removeListener(this.event)
  }
  @ViewChild('map',{static:false}) mapEl:ElementRef
  googleMap:any
  event:any
  ngAfterViewInit(): void {
    this.getGoogleMap().then(map=>{
      const mapView=this.mapEl.nativeElement
      const m=new map.Map(mapView,{
        center:this.loc,
        zoom:16
      })
      this.googleMap=map
      this.event=map.event.addListenerOnce(m,'idle',()=>{
        this.render.addClass(mapView,'visible')
      })
      if(!this.selectable) {
        const marker=new map.Marker({
          position:this.loc,
          map:m,
          title:"Your booking"
        })
        console.log(marker)
        marker.setMap(m)
        return
      }
      m.addListener('click',event=>{
          const cords={lat:event.latLng.lat(),lng:event.latLng.lng()}
          this.ctr.dismiss(cords)
        })
      }).catch(err=>{console.log(err)})
  }

  constructor(private render:Renderer2,private ctr:ModalController) { }

  ngOnInit() {}

  onCancel(){
    this.ctr.dismiss()
  }
private getGoogleMap():Promise<any>{
  const win=window as any
  const googleModule=win.google
  if(googleModule&&googleModule.maps){
    return Promise.resolve(googleModule.maps)
  }
  return new Promise((resolve,reject)=>{
    const script=document.createElement('script')
    script.src=`https://maps.googleapis.com/maps/api/js?key=${environment.googleApiKey}`
    script.async=true
    script.defer=true
    document.body.appendChild(script)
    script.onload=()=>{
      const loaded=win.google
      if(loaded&&loaded.maps){
        resolve(loaded.maps)
      }else{
        reject("Map sdk hasn't been loaded")
      }
    }
  })
}
}
