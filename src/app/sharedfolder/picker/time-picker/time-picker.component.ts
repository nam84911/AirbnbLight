import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Plugins, Capacitor, CameraSource, CameraResultType } from '@capacitor/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss'],
})
export class TimePickerComponent implements OnInit {
  @ViewChild('filePicker',{static:true}) file: ElementRef<HTMLInputElement>
  @Output() imagePicker=new EventEmitter<String | File>()
  selectedPic:String
  userPicker=false
  constructor(private platform:Platform) { }

  ngOnInit() {
    if((this.platform.is('mobile')&&!this.platform.is('hybrid'))
    || !this.platform.is('desktop')){
      this.userPicker=true
    }
  }

  onClickImage(){
    if(Capacitor.isPluginAvailable('Camera')&& this.userPicker==false){
      Plugins.Camera.getPhoto({
        quality:50,
        source:CameraSource.Prompt,
        correctOrientation:true,
        height:320,
        width:200,
        resultType:CameraResultType.Base64
      }).then(image=>{
        this.selectedPic=image.base64String
        this.imagePicker.emit(image.base64String)
      }).catch(err=>{
        this.file.nativeElement.click()
        return
      })
    }else{
      this.file.nativeElement.click()
      return
    }
  }
  onFileChose(event:Event){
    const file=(event.target as HTMLInputElement).files[0]
    if(file){
      const fr=new FileReader()
      fr.onload=()=>{
        const dataURL=fr.result.toString()
        this.selectedPic=dataURL
        this.imagePicker.emit(file)
      }
      fr.readAsDataURL(file)
    }
  }
}
