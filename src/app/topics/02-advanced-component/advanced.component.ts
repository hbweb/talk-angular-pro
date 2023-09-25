import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TopicCard } from 'src/app/shared/models';

@Component({
  selector: '',
  templateUrl: './advanced.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedComponent {

  public topicCards: TopicCard[] = [
    {title: 'Content projection', url: ''},
    {title: 'Custom two-way data bindings', url: ''},
    {title: 'ng-template and ng-container', url: ''},
    {title: 'Sanitization of HTML content', url: ''},
  ];


  public message = "Hello from two way data binding";


  markdown1 = `
    \`\`\`typescript
    <ng-container *ngTemplateOutlet="greet"></ng-container>
    \`\`\`
  `;
}
