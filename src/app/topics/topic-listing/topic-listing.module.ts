import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { TopicListingComponent } from './topic-listing.component';
import { CommonModule } from '@angular/common';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { LetDirective } from '@ngrx/component';

const routes: Routes = [
  {
    path: '',
    component: TopicListingComponent,
  },
  {
    path: 'architecture',
    loadChildren: () =>
      import('../01-architecture/architecture/architecture.module').then(
        (m) => m.ArchitectureModule
      ),
  },

  {
    path: 'component',
    loadChildren: () =>
      import('../02-advanced-component/advanced-component.module').then(
        (m) => m.AdvancedComponentModule
      ),
  },

  {
    path: 'routing',
    loadChildren: () =>
      import('../08-advanced-routing/advanced-routing.module').then(
        (m) => m.AdvancedRoutingModule
      ),
  },
];

@NgModule({
  declarations: [TopicListingComponent],
  imports: [RouterModule.forChild(routes), CommonModule, LetDirective],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class TopicListingModule {}
