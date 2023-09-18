import { Component, inject } from '@angular/core';
import { DumbService } from 'src/app/shared/utils/services';

@Component({
  selector: 'app-inject-service',
  templateUrl: './inject-service.component.html',
  styleUrls: ['./inject-service.component.scss']
})
export class InjectServiceComponent {

    // Usually way
    constructor(private dumbService: DumbService) {

    }

    // Or field initialiser
    fakeServiceOne = inject(DumbService);


    // Inject in functional guard
    // const route = {
    //   path: 'dashboard',
    //   canActivate: [() => inject(DumbService).isAdminRole()]
    // }


    // Hierarchical injectors
    // If a component needs a Service, it will look for any providers or providersIn syntax in component or its own module
    // if not, it will search in its parent.. grandparents.. and so one till the Root injector
    // if still not found, then it will throw an error no Service Provider provided
}
