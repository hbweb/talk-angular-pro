import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { AdvancedRoutingComponent } from './advanced-routing.component';
import { GuardComponent } from './components/guard/guard.component';
import { PermissionsService, UserToken, canActivateUser } from './services/routing.service';

const routes: Routes = [
  {
    path: '',
    component: AdvancedRoutingComponent,
    children: [{
      path: 'with-guard',
      component: GuardComponent,
      canActivate: [canActivateUser]
    }]
  }
];

@NgModule({
  declarations: [AdvancedRoutingComponent],
  providers: [PermissionsService, UserToken],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedComponentsModule
  ]
})
export class AdvancedRoutingModule { }
