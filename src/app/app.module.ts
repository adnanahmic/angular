import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth.guard';
import { ApiService } from './app.service';
import { UserDetailComponent } from './user-detail/user-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, data: { animation: 'login' } },
      { path: 'signup', component: SignupComponent, data: { animation: 'signup' } },
      { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
      { path: 'user/details/:id', component: UserDetailComponent, canActivate: [AuthGuard] },
      { path: '**', redirectTo: '/login' }
    ], {
        useHash: true
      })
  ],
  providers: [AuthGuard,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
