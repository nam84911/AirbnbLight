import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  constructor(private alert:AlertController,private controller:LoadingController,private service:AuthService,private router:Router) { }
  form={email:"",password:""}
  ngOnInit() {
  }
 
  onSubmit(form:NgForm){
    this.controller.create({message:"Signing in..."}).then(ctr=>{
       ctr.present()
      this.service.onLogIn(form.value['email'],form.value['password']).subscribe(data=>{
        ctr.dismiss()
        this.router.navigate(['/','places'])
      },err=>{
        ctr.dismiss()
        if(err.error.error.message=="EMAIL_EXISTS"){
          this.showMessage("Email already exists")
        }else{
          this.showMessage("Some errors occur, try again")
        }
      })
    })
  }
  showMessage(msg:string){
    this.alert.create({
      message: msg,
      buttons:[
        {
          text:"Ok",
          role:'cancel'
        }
      ]
    }).then(ctr=>{
      ctr.present()
    })
    
  }

}
