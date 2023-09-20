import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TopicCard } from 'src/app/shared/models';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicCardComponent {

  @Input() topicCards: TopicCard[] | undefined = undefined;

  constructor(private router: Router) { }

  onClickBackBtn() {
    this.router.navigate(['/topics'])
  }
}
