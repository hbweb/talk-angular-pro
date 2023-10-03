import { Component, ChangeDetectionStrategy } from '@angular/core';
import { provideRouter } from '@angular/router';
import { TopicCard } from 'src/app/shared/models';


@Component({
  selector: 'app-advanced-routing-child',
  template: `Hello`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class ChildComponent {
}

@Component({
  selector: 'app-advanced-routing',
  templateUrl: './advanced-routing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
  ]
})
export class AdvancedRoutingComponent {

  public topicCards: TopicCard[] = [
    { title: 'Child routing and nesting routes', url: 'https://angular.io/guide/router#nesting-routes' },
    { title: 'Router outlet API', url: 'https://angular.io/api/router/RouterOutlet' },
    { title: 'Router guards and resolvers', url: 'https://angular.io/api/router/CanActivate' },
    { title: 'Lazy loading', url: 'https://angular.io/guide/lazy-loading-ngmodules' },
    { title: 'Functional router guards', url: 'https://blog.angulartraining.com/router-utility-functions-in-angular-14-8d843b50d2e2' },
    { title: 'Router module HashLocationStrategy', url: 'https://angular.io/guide/router#hashlocationstrategy' },
    { title: 'How to read route parameters?', url: 'https://angular.io/guide/router#getting-route-information' },
  ];
}
