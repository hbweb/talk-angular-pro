import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { Topic } from 'src/app/shared/models';

@Component({
  selector: 'app-topic-listing',
  templateUrl: './topic-listing.component.html',
  styleUrls: ['./topic-listing.component.scss']
})
export class TopicListingComponent {

  topics$: Observable<Topic[]> = of([
    {"id": 1, "title": "Content Injection", "icon": "fa-solid fa-house","path": "/"},
    {"id": 2, "title": "Dependency Injection", "icon": "fa-brands fa-facebook","path": "/"},
    {"id": 3, "title": "Angular Architecture", "icon": "fa-solid fa-bomb","path": "/"},
    {"id": 1, "title": "Content Injection", "icon": "fa-solid fa-house","path": "/"},
    {"id": 2, "title": "Dependency Injection", "icon": "fa-brands fa-facebook","path": "/"},
    {"id": 3, "title": "Angular Architecture", "icon": "fa-solid fa-bomb","path": "/"},
    {"id": 1, "title": "Content Injection", "icon": "fa-solid fa-house","path": "/"},
    {"id": 2, "title": "Dependency Injection", "icon": "fa-brands fa-facebook","path": "/"},
    {"id": 3, "title": "Angular Architecture", "icon": "fa-solid fa-bomb","path": "/"}
  ]);

}
