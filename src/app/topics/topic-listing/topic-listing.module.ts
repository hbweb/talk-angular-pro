import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { TopicListingComponent } from './topic-listing.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LetDirective } from '@ngrx/component';
import { TypescriptComponent } from '../04-advanced-typescript/typescript.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

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

  {
    path: 'routing',
    loadChildren: () => import('../08-advanced-routing/advanced-routing.module').then(m => m.AdvancedRoutingModule)
  },

  {
    path: 'typescript',
    component: TypescriptComponent
  }

];

@NgModule({
  declarations: [
    TopicListingComponent,
    TypescriptComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedComponentsModule,
    LetDirective,
    HttpClientModule
  ],
})
export class TopicListingModule { }
