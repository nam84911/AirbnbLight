import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Place } from '../../place.model';
import { AuthService } from 'src/app/auth/auth.service';
import { PlaceService } from '../../place.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PlaceLocation } from '../../placeLocation.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  form:FormGroup
  constructor(private authSerivce:AuthService,
              private placeService:PlaceService,
              private loadCtr:LoadingController,
              private router:Router) { }

  ngOnInit() {
    this.form=new FormGroup({
      title:new FormControl(null,
        {
          updateOn:'blur',
          validators:[Validators.required]
        }),
        description:new FormControl(null,
          {
            updateOn:'blur',
            validators:[Validators.required]
          }),
          price:new FormControl(null,
            {
              updateOn:'blur',
              validators:[Validators.required,Validators.min(1)]
            }),
          availible:new FormControl(null,
              {
                updateOn:'blur',
                validators:[Validators.required]
              }),
          to:new FormControl(null,
              {
                updateOn:'blur',
                validators:[Validators.required]
              }),
              image:new FormControl(null,{validators:[Validators.required]}),
              location:new FormControl(null,{validators:[Validators.required]})
    })
  }
  onPickLocation(loc:PlaceLocation){
    this.form.patchValue({location:loc})
  }
  onPickImage(url:string|File){
    if(typeof(url)=='string'){
      try{
        const file=this.base64toBlob(url.replace("data:image/jpeg;base64,",''),'image/jpeg')
        this.form.patchValue({image:file})
      }catch(err){
        console.log(err)
      }
    }else{
      this.form.patchValue({image:url})
    }
  }
  onSubmit(){
    let title=this.form.value['title']
    let description=this.form.value['description']
    let price=+this.form.value['price']
    let availible=new Date(this.form.value['availible'])
    let to= new Date(this.form.value['to'])
    let placeLoc=this.form.value['location']
    let place=new Place(Math.random().toString(),
                        description,
                        "https://i.picsum.photos/id/866/200/300.jpg",
                        title,
                        price,
                        availible,
                        to,
                        null,
                        placeLoc)
    this.loadCtr.create({message:"Loading..."}).then(ctr=>{
        ctr.present()
        this.placeService.updateImage(this.form.value['image']).pipe(switchMap(res=>{
          return this.placeService.addPlace(place,res.imageUrl)
        })).subscribe(()=>{
          ctr.dismiss()
          this.form.reset()
          this.router.navigate(['/places/tabs/offers'])
        })
    })
  }
private  base64toBlob(base64Data, contentType) {
  contentType = contentType || '';
  const sliceSize = 1024;
  const byteCharacters = atob(base64Data);
  const bytesLength = byteCharacters.length;
  const slicesCount = Math.ceil(bytesLength / sliceSize);
  const byteArrays = new Array(slicesCount);

  for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    const begin = sliceIndex * sliceSize;
    const end = Math.min(begin + sliceSize, bytesLength);

    const bytes = new Array(end - begin);
    for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  return new Blob(byteArrays, { type: contentType });
}

}
