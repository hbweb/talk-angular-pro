import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { AdvancedRoutingComponent } from './advanced-routing.component';
import { GuardComponent } from './components/guard/guard.component';

const routes: Routes = [
  {
    path: '',
    component: AdvancedRoutingComponent,
    children: [{
      path: 'with-guard',
      component: GuardComponent
    }]
  }
];

@NgModule({
  declarations: [AdvancedRoutingComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedComponentsModule
  ]
})
export class AdvancedRoutingModule { }
