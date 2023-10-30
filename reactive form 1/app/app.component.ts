import { Component } from '@angular/core';
import { FormGroup} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactappforms';
  userList:any=[];
  addUser(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
    this.userList.push(this.userForm.value);
  }else
    console.log('Validation error');
  }
  deleteuser(index: number) {
    this.userList.splice(index, 1);
  }
  editUserIndex: number = -1; // Initialize to -1, indicating no user is being edited

  // ...

  updateUser(userData: any) {
    if (this.editUserIndex !== -1) {
      this.userList.splice(this.editUserIndex, 1, userData.value);
      this.cancelEdit(); // Reset the edit state
    }
  }

  editUser(index: number) {
    this.editUserIndex = index;
  }

  cancelEdit() {
    this.editUserIndex = -1;
  }

//form group represents the form
userForm:any=new FormGroup({
//form control rep input fields   
firstName:new FormControl('',[Validators.minLength(5),Validators.maxLength(50),Validators.required]),
lastName:new FormControl('',[Validators.minLength(5),Validators.maxLength(50),Validators.required]),
joinDate:new FormControl('',[Validators.required]),
salary: new FormControl(40000,[Validators.min(40000),Validators.max(100000),Validators.required])
},
{
  updateOn:'change'
}
);
 
}
 
 