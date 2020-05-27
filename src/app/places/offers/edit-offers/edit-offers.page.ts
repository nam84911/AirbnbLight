import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { PlaceService } from '../../place.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-offers',
  templateUrl: './edit-offers.page.html',
  styleUrls: ['./edit-offers.page.scss'],
})
export class EditOffersPage implements OnInit {
  form:FormGroup
  isLoading=false
  place:Place
  placeSubscription:Subscription
  constructor(private placeService:PlaceService,private route:ActivatedRoute,private navCtr:NavController,private loadCtr:LoadingController,private router:Router) { }

  ngOnInit() {
    this.isLoading=true
    this.route.paramMap.subscribe(p=>{
      if(!p.has('placeId')){
        this.navCtr.navigateBack('places/tabs/offers')
        return
      }
      this.placeSubscription=this.placeService.findPlace(p.get('placeId')).subscribe(place=>{
        this.place=place
        console.log(place)

    this.form=new FormGroup({
      title:new FormControl(this.place.title,
        {
          updateOn:'blur',
          validators:[Validators.required]
        }),
        description:new FormControl(this.place.description,
          {
            updateOn:'blur',
            validators:[Validators.required]
          }),
          price:new FormControl(this.place.price,
            {
              updateOn:'blur',
              validators:[Validators.required,Validators.min(1)]
            }),
            availible:new FormControl(this.place.from.toISOString(),
              {
                updateOn:'blur',
                validators:[Validators.required]
              }),
              to:new FormControl(this.place.to.toISOString(),
                {
                  updateOn:'blur',
                  validators:[Validators.required]
                }),
              location:new FormControl(this.place.location,
                {
                  validators:[Validators.required]
                })
          })
          this.isLoading=false
        })
      })
   }
  edit(){
    this.loadCtr.create({message:"Loading..."}).then(ctr=>{
      ctr.present()
      this.placeService.updatePlace(
        this.place.id,
        this.form.value['title'],
        this.form.value['description'],
        +this.form.value['price'],
        new Date(this.form.value['availible']),
        new Date(this.form['to']),
        this.form.value['location']
      ).subscribe(()=>{
        ctr.dismiss()
        this.router.navigate(['/','places','tabs','offers'])
      })
    })
  }
  ngOnDestroy(): void {
    if(this.placeSubscription){
      this.placeSubscription.unsubscribe()
    }
  }
}
