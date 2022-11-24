import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestLoggerService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Started');
    const userId = '21';
    const modifiedReq = req.clone({
      headers: req.headers.set('Auth', `Bearer ${userId}`),
    });

    return next.handle(modifiedReq).pipe();
  }
}
