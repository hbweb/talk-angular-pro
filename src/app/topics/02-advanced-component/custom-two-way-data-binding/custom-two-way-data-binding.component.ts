import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-two-way-data-binding',
  template: '',
})
export class CustomTwoWayDataBindingComponent {

  /* Two way data binding could be found in <input [(ngModel)]="firstName" type="text"></input>


  It actually look like this behind the scene (syntactic sugar)
  <input [ngModel]="firstName" (ngModelChange)="firstName = $event" type="text"></input>

  Below is how we could build our own two way data binding

  */

  noteMsgValue!: string;

  @Input()
  set noteMsg(val) {
    this.noteMsgValue  = val;
    this.noteMsgChange.next(val);
    console.log('setter: value ', val);
  }

  get noteMsg() {
    console.log('getter: value ', this.noteMsgValue);
    return this.noteMsgValue;
  }

  @Output() noteMsgChange = new EventEmitter<string>();
}
