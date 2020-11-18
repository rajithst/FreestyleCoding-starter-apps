import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "./services/user.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-router-guards';
  
  constructor(private userService:UserService,private router:Router){}
  ngOnInit(){
    
  }
  logout(){
    let status = false
    this.userService.changeUserStatus(status)
    this.router.navigate([""])
  }

  isLoggedIn(){
    return this.userService.isLoggedIn()
  }
}
