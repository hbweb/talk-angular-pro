import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { AdvancedComponent } from './advanced.component';
import { CustomTwoWayDataBindingComponent } from './custom-two-way-data-binding/custom-two-way-data-binding.component';

const routes: Routes = [
  {
    path: '',
    component: AdvancedComponent
  }
];

@NgModule({
  declarations: [AdvancedComponent, CustomTwoWayDataBindingComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedComponentsModule
  ]
})
export class AdvancedComponentModule { }
