import { Component } from '@angular/core';
import { UserData } from './User-Data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  udata=new UserData();
  
}
