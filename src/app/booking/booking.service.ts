import { Injectable } from '@angular/core';
import { Booking } from './booking.model';
import { BehaviorSubject } from 'rxjs';
import {take,map,tap,delay, switchMap} from "rxjs/operators"
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
interface BookingData{
   placeId:String,
   userId:String,
   title:String,
   guests:number,
   first:string,
   last:string,
   photoURL:string,
   from:Date,
   to:Date
}
@Injectable({
  providedIn: 'root'
})
export class BookingService {
 private _bookings= new BehaviorSubject<Booking[]>([])

 get bookings(){
  return this._bookings.asObservable()
}
  constructor(private http:HttpClient,private auth:AuthService) { }
 fetchBooking(){
   return this.auth.userId.pipe(switchMap(id=>{
    return this.http.get<{[key:string]:BookingData}>(`https://airbnblight.firebaseio.com/bookings.json?orderBy="userId"&equalTo="${id}"`)
   }),map(res=>{
    const bookings:Booking[]=[]
    for(let s in res){
      if(res.hasOwnProperty(s)){
        bookings.push(new Booking(
          s,
          res[s].placeId,
          res[s].userId,
          res[s].title,
          +res[s].guests,
          res[s].first,
          res[s].last,
          res[s].photoURL,
          new Date(res[s].from),
          new Date(res[s].to)
        ))
      }
    }
    return bookings
  }),tap(bookings=>{
    this._bookings.next(bookings)
  }))
  
  

 }
  cancelBooking(id){
    return this.http.delete(`https://airbnblight.firebaseio.com/bookings/${id}.json`).pipe(
      switchMap(res=>{
        return this._bookings
      }),take(1),tap(bookings=>{
        this._bookings.next(bookings.filter(b=>b.id!=id))
      })
    )
    
    /*return this.bookings.pipe(take(1),delay(1000),tap(bookings=>{
      this._bookings.next(bookings.filter(b=>b.id!=id))
    }))*/
  }
 addBooking(id,
            placeId,
            userId,
            title,
            guests,
            first,
            last,
            photoURL,
            from,
            to){
    let booking=new Booking(id,
                            placeId,
                            userId,
                            title,
                            guests,
                            first,
                            last,
                            photoURL,
                            from,
                            to)
      let idIs:string
      return this.auth.userId.pipe(take(1),switchMap(userId=>{
        booking.userId=userId
        return this.http.post<{name:string}>(`https://airbnblight.firebaseio.com/bookings.json`,{...booking,id:null})
      })).pipe(switchMap(res=>{
        idIs=res.name
        return this._bookings
      }),take(1),tap(places=>{
        booking.id=idIs
        this._bookings.next(places.concat(booking))
      }))
    /*return this._bookings.pipe(take(1),delay(1000),tap(bookings=>{
      this._bookings.next(bookings.concat(booking))
    }))*/

  }
}
