import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { TopicListingComponent } from './topic-listing.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: TopicListingComponent
  },
  {
    path: 'architecture',
    loadChildren: () => import('../01-architecture/architecture/architecture.module').then(m => m.ArchitectureModule)
  },

  {
    path: 'component',
    loadChildren: () => import('../02-advanced-component/advanced-component.module').then(m => m.AdvancedComponentModule)
  },

];

@NgModule({
  declarations: [
    TopicListingComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ],
})
export class TopicListingModule { }
