import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicCardComponent } from './topics/topic-card/topic-card.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    TopicCardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopicCardComponent,
    HeaderComponent,
    FooterComponent
  ]

})
export class SharedComponentsModule { }
