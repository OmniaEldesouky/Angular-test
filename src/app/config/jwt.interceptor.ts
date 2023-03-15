import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authReq = request.clone({
      setHeaders: { 
       'Authorization':'Bearer 9ce9c90ab8c2944f1860333da4d3bd7793fd24615bfb650dd06bd4fc3cf13bb6'
       }
    });
    return next.handle(authReq);  }
}
