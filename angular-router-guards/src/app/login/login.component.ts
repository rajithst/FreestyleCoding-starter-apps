import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../services/user.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,private router:Router) { }
  
  ngOnInit() {
  }

  loginUser(){
    let status = true
    this.userService.changeUserStatus(status)
    this.router.navigate([""])
    
  }

}
