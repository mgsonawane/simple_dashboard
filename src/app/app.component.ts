import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard';
  model:any={} ;
  flag:boolean=false;
  show_stock:boolean=false;
  view:boolean=true;
  edit:boolean=false;
  fname:string;
  width: number;
  height: number;
  constructor(private router:Router,private dialog:MatDialog) { }

  ngOnInit() {
   
  }
  // signout 
  public signout(){
   
  }
  //stock flag
  public list(){
    if(this.show_stock){
      this.show_stock=false;
    }
    else{
      this.show_stock=true;  }
  }
  // fruits component
  public fruits(){
    this.router.navigate(['fruits']);
  }
  //books component
  public books(){
    this.router.navigate(['books']);
  }
  //homescreen
  public home(){
    this.router.navigate(['home']);
  }
  //Edit profile
  public editprofile(){
    this.view=false;
    this.edit=true;
  }
  //View profile
  public viewprofile(){
    this.edit=false;
    this.view=true;
  }




}

