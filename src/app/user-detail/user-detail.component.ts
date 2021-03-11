import { ActivatedRoute, Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from '../app.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userDetails = [];
  id;
  constructor(private router: Router,private apiService: ApiService, private activatedroute: ActivatedRoute) {
    this.activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
    })
   }

  ngOnInit() {

    this.userDetail();
  }

  getUserEmail() {
    return localStorage.getItem('email');
  }

  logout() {
    localStorage.removeItem('email');
    this.router.navigateByUrl('/');
  }

  userDetail(){
    this.apiService.getUserDetail(this.id).subscribe(res => {
    this.userDetails =res.data;
    })
  }

}
