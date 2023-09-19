import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TopicCard } from 'src/app/shared/models';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicCardComponent {

  @Input() topicCards: TopicCard[] | undefined = undefined;

}
