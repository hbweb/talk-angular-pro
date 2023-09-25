import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-two-way-data-binding',
  template:`

    <div class="mt-5">
      <ng-container *ngTemplateOutlet="greet"></ng-container>

      <ng-container *ngTemplateOutlet="eng; context: myContext"></ng-container>

      <ng-container *ngTemplateOutlet="vn; context: myContext"></ng-container>


      <ng-template #greet><span>Hello</span> <br /></ng-template>
      <ng-template #eng let-name><span>Hello {{name}}!</span> <br /></ng-template>
      <ng-template #vn let-lang="localLang" let-name="localName" ><span>Xin Chào {{name}} ({{ lang }})!</span> <br /></ng-template>
    </div>
  `,
})
export class CustomTwoWayDataBindingComponent {

  /* Two way data binding could be found in <input [(ngModel)]="firstName" type="text"></input>


  It actually look like this behind the scene (syntactic sugar)
  <input [ngModel]="firstName" (ngModelChange)="firstName = $event" type="text"></input>

  Below is how we could build our own two way data binding

  */


  /* Example for ng-template */
  myContext = {$implicit: 'World', localLang: 'Tiếng Việt', localName: 'Hưng' };


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
