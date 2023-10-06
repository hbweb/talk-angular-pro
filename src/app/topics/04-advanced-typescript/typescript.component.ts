import { Component } from '@angular/core';
import { TopicCard } from 'src/app/shared/models';

@Component({
  selector: 'app-typescript',
  template: `
  <h1 class="mb-2 text-1xl font-bold text-gray-800 md:text-3xl">
    Advanced Typescript
  </h1>
  <p class="pb-8">A few topics to cover in this area:</p>

  <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
    <div class="col-span-2"><app-topic-card [topicCards]="topicCards"></app-topic-card></div>
    <div class="demo-content col-span-3 bg-slate-100 p-4 shadow-lg">
      <div>
        <p></p>
        <p></p>
      </div>
    </div>
  </div>

  `
})
export class TypescriptComponent {
  public topicCards: TopicCard[] = [
    { title: 'Spread syntax and its different usages', url: '' },
    { title: 'Interface', url: '' },
    { title: 'Generics', url: '' },
    { title: 'Union types and utility types', url: '' },
    { title: 'Constructor syntax options', url: '' },
    { title: 'Enums', url: '' },
    { title: 'Nullish coalescing operator', url: '' },
  ];
}
