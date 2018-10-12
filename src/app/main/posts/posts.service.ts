import {Injectable} from '@angular/core';
import {IPost} from '@models/post';
import {AppConfig} from '@core/config';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) {}

    getPosts(): Observable<IPost[]> {
      const url =  AppConfig.endpoints.posts;
      return this.http.get<Observable<IPost[]>>(url).pipe(
          map((res: IPost[]) => res),
          catchError(error => throwError(error))
        );
    }
    getPost(id: number): Observable<IPost> {
      const url =  `${AppConfig.endpoints.posts}/${id}`;
      return this.http.get<Observable<IPost>>(url).pipe(
          map((res: IPost) => res),
          catchError(error => throwError(error))
        );
    }
    updatePost(body: IPost): Observable<IPost> {
      const url =  `${AppConfig.endpoints.posts}/${body.id}`;
      return this.http.put<Observable<IPost>>(url, body).pipe(
          map((res: IPost) => res),
          catchError(error => throwError(error))
        );
    }
    createPost(body: IPost): Observable<IPost> {
      const url =  `${AppConfig.endpoints.posts}`;
      return this.http.post<Observable<IPost>>(url, body).pipe(
          map((res: IPost) => res),
          catchError(error => throwError(error))
        );
    }
    deletePost(body: IPost): Observable<IPost> {
      const url =  `${AppConfig.endpoints.posts}/${body.id}`;
      return this.http.delete<Observable<IPost>>(url).pipe(
          map((res: IPost) => res),
          catchError(error => throwError(error))
        );
    }
}
