import {Injectable, Injector} from '@angular/core';
import {
  HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private injector: Injector, private router: Router){ }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      url: this.updateUrl(request.url),
      // add headers if needed
    });
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        // do something with response if needed
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
        // do something with error if needed
        }
      })
    );
  }

  private updateUrl(url: string) {
    return (url.startsWith('http://')
      || url.startsWith('https://'))
      || url.includes('/assets/') ? url : environment.url + url;
  }
}
