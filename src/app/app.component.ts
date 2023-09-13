import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiService } from './shared/utils/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private apiService: ApiService){
  }
}
