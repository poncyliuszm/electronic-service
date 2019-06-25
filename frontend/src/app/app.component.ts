import {Component} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {NavigationStart, Router} from "@angular/router";
import {isUndefined} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';


  constructor(private authService: AuthService,
              public router: Router) {
    router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
          if (this.authService.checkCredentials() && event.url != '/login') {
            if (isUndefined(authService.currentUser)) {
              authService.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
            }
          }
        }
      }
    )
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
