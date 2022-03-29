import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-app';
  user: any = {};

  constructor(
    public authSvc: AuthService
  ) {}

  ngOnInit() {

  }

  isLoggedIn(): boolean {
    this.user = this.authSvc.getUser();
    return this.authSvc.isLoggedIn();
  }
}
