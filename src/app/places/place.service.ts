import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { ThrowStmt } from '@angular/compiler';
import { BehaviorSubject, of } from 'rxjs';
import {take,map,tap,delay, switchMap} from "rxjs/operators"
import { HttpClient } from '@angular/common/http';
import { PlaceLocation } from './placeLocation.model';
import { stringify } from 'querystring';
import { AuthService } from '../auth/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
interface PlaceData{
  description: string,
  from: Date,
  photoURL: string,
  title: string,
  to: Date,
  userId:string,
  price:number,
  location:PlaceLocation
}
@Injectable({
  providedIn: 'root'
})

export class PlaceService {
  private _places= new BehaviorSubject<Place[]>([])
    get places(){
    return this._places.asObservable()
  }
  
  constructor(private http:HttpClient,private auth:AuthService) { }
  fetchData(){
    return this.http.get<{[key:string]:PlaceData}>("https://airbnblight.firebaseio.com/offers.json").
    pipe(map(res=>{
      let placesList:Place[]=[]
      
      for(const s in res){
        if(res.hasOwnProperty(s)){
          placesList.push(new Place(
                s,
                res[s].description,
                res[s].photoURL,
                res[s].title,
                +res[s].price,
                new Date(res[s].from),
                new Date(res[s].to),
                res[s].userId,
                res[s].location
          ))
        }
      }
      return placesList
    }),tap(placesList=>{
      console.log("chnaging")
      this._places.next(placesList)
    }))
  }
  updateImage(image:File){
    const updateDaata=new FormData()
    updateDaata.append('image',image)
    return this.http.post<{imageUrl:string,imagePath:string}>('https://us-central1-airbnblight.cloudfunctions.net/storeImage',updateDaata)
  }
  findPlace(placeId:string){
    return this.http.get<PlaceData>(`https://airbnblight.firebaseio.com/offers/${placeId}.json`).pipe(map(res=>{
      return new Place(
        placeId,
        res.description,
        res.photoURL,
        res.title,
        +res.price,
        new Date(res.from),
        new Date(res.to),
        res.userId,
        res.location)
    }))
    /*return this._places.pipe(take(1),map(places=>{
      return places.find(
        p=>
        {
        return p.id==placeId
      })
    }))*/
  }
  
  updatePlace(
    id,
    title,
    description,
    price,
    availible,
    to,
    location
  ){
    let updatePlaces=[]
    return this._places.pipe(take(1),switchMap(places=>{
      if(!places||places.length<=0){
        return this.fetchData()
      }else{
        return of(places)
      }
    }),switchMap(places=>{
      const index=places.findIndex(p=>{
        return p.id==id
      })
         updatePlaces=[...places]
        updatePlaces[index].title=title
        updatePlaces[index].description=description
        updatePlaces[index].from=availible
        updatePlaces[index].to=to
        updatePlaces[index].price=price
        updatePlaces[index].location=location
        return this.http.put(`https://airbnblight.firebaseio.com/offers/${id}.json`,
                {...updatePlaces[index],id:null})
    }),tap(res=>{
      this._places.next(updatePlaces)
    }))
      /*return this._places.pipe(take(1),delay(1000),tap(places=>{
          const index=places.findIndex(p=>{
            return p.id==id
          })
          const updatePlaces=[...places]
          updatePlaces[index].title=title
          updatePlaces[index].description=description
          updatePlaces[index].from=availible
          updatePlaces[index].to=to
          updatePlaces[index].price=price
          this._places.next(updatePlaces)
      }))*/
  }
  addPlace(place:Place,photo:string){
    let id:string
    place.photoURL=photo
    return this.auth.userId.pipe(take(1),
   switchMap(id=>{
     place.userId=id
    return this.http.post<{name:string}>("https://airbnblight.firebaseio.com/offers.json",{
      ...place,id:null})
   }),switchMap(result=>{
    id=result.name
    return this._places
  }),take(1),
  tap(places=>{
    place.id=id
    this._places.next(places.concat(place))
  }))
    
    //return this._places.pipe(take(1),delay(1000),tap(places=>{
     // this._places.next(places.concat(place))
    //}))
  }
}
