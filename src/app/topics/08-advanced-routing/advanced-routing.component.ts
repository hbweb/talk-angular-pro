import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TopicCard } from 'src/app/shared/models';

@Component({
  selector: 'app-advanced-routing',
  templateUrl: './advanced-routing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedRoutingComponent {

  public topicCards: TopicCard[] = [
    {title: 'Child routing and nesting routes', url: ''},
    {title: 'Router outlet API', url: ''},
    {title: 'Router guards and resolvers', url: ''},
    {title: 'Lazy loading', url: ''},
    {title: 'Functional router guards', url: ''},
    {title: 'Router module HashLocationStrategy', url: ''},
    {title: 'How to read route parameters?', url: ''},
  ];
}
