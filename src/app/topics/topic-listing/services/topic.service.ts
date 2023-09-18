import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TopicsResponse } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private _httpClient: HttpClient) { }

  public getTopics(): Observable<TopicsResponse> {
    return this._httpClient.get<TopicsResponse>('assets/data/topic-listing.json');
  }
}
