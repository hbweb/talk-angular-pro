import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { TopicListingComponent } from './topic-listing.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: TopicListingComponent
  }
];

@NgModule({
  declarations: [
    TopicListingComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ],
})
export class TopicListingModule { }
