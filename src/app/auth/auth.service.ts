import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, from } from 'rxjs';
import { User } from './user.model';
import { map,tap } from 'rxjs/operators';
import { Plugins } from '@capacitor/core';
interface DataToken{
  idToken	:string
  email	:string
  refreshToken:string	
  expiresIn	:string
  localId:string
  registered?:boolean
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user=new BehaviorSubject<User>(null)
  get userIsAuthenticated(){
    if(this._user==null){
      return false
    }
    return this._user.asObservable().pipe(map(user=>{
      if(user){
        return !!user.token 
      } 
    }))
  }
  get userId(){
    return this._user.asObservable().pipe(map(user=>{
      if(this._user){
        return user.id
      }
      return null
    }))
  }
  constructor(private http:HttpClient) { }
  onLogIn(email,password){
    return this.http.post<DataToken>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase}`,{
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(tap(data=>{
      const exp=new Date((new Date()).getTime()+(+data.expiresIn)*1000)
      this.storeData(data.localId,data.idToken,exp.toISOString(),data.email)
      this._user.next(new User(data.localId,
        data.email,
        data.idToken,
        exp
        ))
    }))
  }
  autologin(){
    return from(Plugins.Storage.get({key:'authdata'})).pipe(
      map(json=>{
        if(!json ||!json.value){
          return null
        }
        const data=JSON.parse(json.value)
        if(new Date(data.exp)<=new Date()){
          return null
        }
        return new User(data.id,data.email,data.toekn,new Date(data.exp))
      })
    ,tap(user=>{
      if(user){
        this._user.next(user)
      }
    }),map(user=>{
      return !!user
    }))
  }
  private storeData(userId:string,userToken:string,exp:string,email:string){
    const data=JSON.stringify({id:userId,token:userToken,exp:exp,email:email})
    Plugins.Storage.set({key:'authdata',value:data})
  }
  onLogout(){
    this._user.next(null)
  }
  singUp(email:string,password:string){
    return this.http.post<DataToken>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase}`,{
      email:email,
      password:password,
      returnSecureToken:true
    })
  }
}
