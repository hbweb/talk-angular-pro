import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArchitectureComponent } from './architecture.component';

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
    CommonModule
  ]
})
export class ArchitectureModule { }
