import { Component } from '@angular/core';
import { OnInit,OnDestroy } from '@angular/core';
import { DoCheck,AfterContentChecked } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,OnDestroy,DoCheck,AfterContentChecked,
AfterContentInit,AfterViewChecked,AfterViewInit{


  firstName:string="Unknown";
  lastName:string="Unknown";
  
  ngOnDestroy(): void {
    console.log("Component getting destroyed"+new Date())
  }

  ngOnInit(): void {
    //initialisation
    //connecting to backend and fetch data
    var today=new Date();
    console.log("Component getting initialised"+today)
  }
  ngDoCheck(): void {
    console.log("ngDoCheck called");
  }
  ngAfterContentChecked(): void {
    //step4
    console.log("ngAfterContentChecked called");
  }
  ngAfterContentInit(): void {
    
    console.log("ngAfterContentInit called");
  }
  ngAfterViewChecked(): void {

    console.log("ngAfterViewChecked called");
  }
  ngAfterViewInit(): void {
    //step5
    console.log("ngAfterViewInit called");
  }



  title = 'componentslifecycle';
}
