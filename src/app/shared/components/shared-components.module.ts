import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicCardComponent } from './topics/topic-card/topic-card.component';


@NgModule({
  declarations: [
    TopicCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopicCardComponent
  ]

})
export class SharedComponentsModule { }
