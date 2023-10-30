import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div style="border:4px;border-style:dashed;border-color: burlywood;background-color: yellow;">Welcome Mr/Ms {{name}}</div>',
  styles:['b{border:4px;border-style:dashed;border-color: burlywood;background-color: magenta;}',
  'div{color: aqua;}']
})
export class AppComponent {
  title = 'first website in angular';
  name:string='HARISH V';

}
