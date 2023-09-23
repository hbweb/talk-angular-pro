import { Observable, filter, map } from 'rxjs';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isHome$: Observable<boolean> = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map((event) => event as NavigationEnd),
    map((event) => event.url == '/')
  )

  constructor(private router: Router) {

  }
}
