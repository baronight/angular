import { Component, OnInit, Injector, ReflectiveInjector } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userName: string = "";

  constructor(private userService: UserService) {
    // // Create an _injector_ and ask for it to resolve and create UserService
    // const injector: any = ReflectiveInjector.resolveAndCreate([UserService]);

    // // use the injector to **get the instance** of the UserService
    // this.userService = injector.get(UserService);
  }

  ngOnInit(): void {
  }

  signIn(): void {
    //when we sign in, set the user
    //this mimics filling out a login form
    this.userService.setUser({
      name: 'Nate Murray',
    });

    // now **read** the user name from the service
    this.userName = this.userService.getUser().name;
    console.log('User name is', this.userName);
  }

}
