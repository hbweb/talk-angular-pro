import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ENVIRONMENT_TOKEN } from './shared/tokens/environment.token';
import { ApiService, apiServiceFactory } from './shared/utils/services';
import { environment } from './../environments/environment';
import { HeaderComponent } from './shared/components/header/header.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [
    {
      provide: ENVIRONMENT_TOKEN,
      useValue: environment.production ? 'prod' : '',  // Dynamically set ENVIRONMENT_TOKEN
    },
    {
      provide: ApiService,
      useFactory: apiServiceFactory,
      deps: [HttpClient, ENVIRONMENT_TOKEN],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
