import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { TopicListingComponent } from './topic-listing.component';
import { CommonModule } from '@angular/common';

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
    CommonModule
  ],
})
export class TopicListingModule { }
