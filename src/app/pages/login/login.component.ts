import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string = "";
  returnUrl: string = "";

  constructor(
    public authSvc: AuthService,
    public route: ActivatedRoute,
    public router: Router,
  ) { 
    route.queryParams.subscribe(
      q => {
        this.returnUrl = q.returnUrl;
      }
    )
  }

  ngOnInit(): void {
  }

  login(username: string, password: string): boolean {
    this.message = "";
    if (!this.authSvc.login(username, password)) {
      this.message = "Incorrect credentials.";
      setTimeout(() => {
        this.message = ""
      }, 2500);
    } else {
      console.log(this.returnUrl);
      this.router.navigateByUrl(this.returnUrl);
    }
    return false;
  }

  logout(): boolean {
    this.authSvc.logout();
    return false;
  }
}
