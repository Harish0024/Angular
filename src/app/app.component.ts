import { Component } from '@angular/core';
import { UserData } from './User-Data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  udata:UserData=new UserData();
  UserList:UserData[]=[];//Array of userdata objects

 
  title = 'bindings';
  themeName:string='ocean';
  color:string='red';
  size:number=100;
 
  enableDisable:boolean=false;
  state:string='tn';
  city:string='chennai';
  savedata(event:Event){
       this.UserList.push(this.udata);
       console.log('Added data to array');
       //console.log(this.userDetails);
       this.udata=new UserData();

  }
  check(){
   // var count=this.firstName.length
    //console.log(event.target);
    //console.log(count);
    console.log(this.udata.firstName.length);

  }
  sendData(){
    
    console.log("sending data to Express Backend");

  }
}
