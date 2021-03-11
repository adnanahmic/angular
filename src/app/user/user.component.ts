import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from '../app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
userLists=[];
  constructor(private router: Router,private apiService: ApiService) { }

  ngOnInit() {
    this.getUserLists();
  }

  getUserEmail() {
    return localStorage.getItem('email');
  }

  logout() {
    localStorage.removeItem('email');
    this.router.navigateByUrl('/');
  }

  getUserLists(){
    this.apiService.getUserList().subscribe(res => {
    this.userLists =res.data;
    })
  }
  navigateUserDetail(user){
    console.log(user)
    this.router.navigate(['user/details/'+ user.id]);
  }

}
