import {
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ENVIRONMENT_TOKEN } from './shared/tokens/environment.token';
import { ApiService, apiServiceFactory } from './shared/utils/services';
import { environment } from './../environments/environment';
import { SharedComponentsModule } from './shared/components/shared-components.module';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedComponentsModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [
    {
      provide: ENVIRONMENT_TOKEN,
      useValue: environment.production ? 'prod' : '', // Dynamically set ENVIRONMENT_TOKEN
    },
    {
      provide: ApiService,
      useFactory: apiServiceFactory,
      deps: [HttpClient, ENVIRONMENT_TOKEN],
    },
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}
