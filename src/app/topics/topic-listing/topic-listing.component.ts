import { map } from 'rxjs/operators';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from 'src/app/shared/models';
import { TopicService } from './services/topic.service';

@Component({
  selector: 'app-topic-listing',
  templateUrl: './topic-listing.component.html',
  styleUrls: ['./topic-listing.component.scss']
})
export class TopicListingComponent {

  topics$: Observable<Topic[]> = this.topicService.getTopics().pipe(
    map(data => data.data)
  );

  constructor(private topicService: TopicService) {
  }


  topicsTrackBy(index: number, topic: Topic) {
    return topic.id;
  }

}
