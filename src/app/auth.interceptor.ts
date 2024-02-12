import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = localStorage.getItem("token") ?? ''; // Use '' as default if token is null
    const authReq = request.clone({
      setHeaders: {
        Authorization: `${authToken}`
      }
    });
    return next.handle(authReq);
  }
}


