import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  constructor(private alert:AlertController,private controller:LoadingController,private service:AuthService,private router:Router) { }
  form={email:"",password:""}
  ngOnInit() {}
  onSubmit(form:NgForm){
    this.controller.create({message:"Signing up..."}).then(ctr=>{
       ctr.present()
      this.service.singUp(form.value['email'],form.value['password']).subscribe(data=>{
        ctr.dismiss()
        this.router.navigate(['signin'])
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
