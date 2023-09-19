import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArchitectureComponent } from './architecture.component';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

const routes: Routes = [
  {
    path: '',
    component: ArchitectureComponent
  }
];

@NgModule({
  declarations: [ArchitectureComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedComponentsModule
  ]
})
export class ArchitectureModule { }
