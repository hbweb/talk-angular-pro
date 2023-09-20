import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-custom-two-way-data-binding',
  templateUrl: './custom-two-way-data-binding.component.html',
  styleUrls: ['./custom-two-way-data-binding.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTwoWayDataBindingComponent {

  /* Two way data binding could be found in <input [(ngModel)]="firstName" type="text"></input>


  It actually look like this behind the scene (syntactic sugar)
  <input [ngModel]="firstName" (ngModelChange)="firstName = $event" type="text"></input>

  Below is how we could build our own two way data binding

  */




}
