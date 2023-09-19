import { Component } from '@angular/core';
import { TopicCard } from 'src/app/shared/models';

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.scss']
})
export class ArchitectureComponent {

  public topicCards: TopicCard[] = [
    {title: 'Angular Architecture', url: 'https://blog.angular-university.io/angular-2-smart-components-vs-presentation-components-whats-the-difference-when-to-use-each-and-why/'},
    {title: 'Lazy loading with router', url: 'https://angular.io/guide/lazy-loading-ngmodules#lazy-loading-feature-modules'},
    {title: 'The different types of ngModules', url: 'https://angular.io/guide/module-types'},
    {title: 'Dependency injection providers', url: 'https://angular.io/guide/dependency-injection-providers'},
  ];
}
