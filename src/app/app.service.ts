import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment as env } from '../environments/environment';

@Injectable()

export class ApiService {
  constructor(private http: HttpClient) { }

  public getUserList(): Observable<any> {
    return this.http.get<any>(env.baseUrl+'api/users?page=2');
  }  
  public getUserDetail(id): Observable<any> {
    return this.http.get<any>(env.baseUrl+'api/users/'+id);
  }  
}
