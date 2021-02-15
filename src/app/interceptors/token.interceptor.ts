import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone()
    if (!req.url.includes('login')) {
      req.headers.set('Authorization', `Token ${localStorage.token || sessionStorage.token}`)
    }
    console.log(req)

    return next.handle(req)
  }
}
