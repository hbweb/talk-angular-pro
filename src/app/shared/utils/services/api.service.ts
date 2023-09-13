import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(http: HttpClient, @Inject(String) private apiUrl: string){
    console.log('API Base URL', this.apiUrl);
  }

  // Your API methods go here...
}

// Create api service factory that return an instance of ApiService class that has correct base Api Url
export function apiServiceFactory(http: HttpClient, environment: string): ApiService {
  let apiUrl: string;

  if (environment === 'prod') {
    apiUrl = 'https://api.prod.mysite.com';
  } else if (environment === 'staging') {
    apiUrl = 'https://api.staging.mysite.com';
  } else {
    apiUrl = 'https://api.dev.mysite.com';
  }

  return new ApiService(http, apiUrl);
}
