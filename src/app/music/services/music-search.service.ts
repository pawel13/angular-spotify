import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Album, AlbumsResponse } from 'src/app/model/Album';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/security/auth.service';

export const SEARCH_URL = new InjectionToken('Search API Url');

@Injectable({
  providedIn: 'root'
})
export class MusicSearchService {
  albums: Album[] = [
    {
      id: '123',
      name: 'Album test',
      images: [
        {url: 'https://www.placecage.com/c/200/300'}
      ]
    },
    {
      id: '345',
      name: 'Album test2',
      images: [
        {url: 'http://placekitten.com/200/300'}
      ]
    }
];
  constructor(
    @Inject(SEARCH_URL) private search_api_url: string,
    private http: HttpClient,
    private auth:AuthService
    ) { }

    getAlbums() {
      return this.http.get<AlbumsResponse>(this.search_api_url, {
        headers: {
          Authorization: 'Bearer ' + this.auth.getToken()
         },
        params:{
          type: 'album',
          q: 'batman'

        }
        // observe: 'response',
        // reportProgress: true,
        // responseType: 'arraybuffer',
        //withCredentials: true

      }).pipe(
        pluck<AlbumsResponse, Album[]>("albums","items")
          // map(resp => resp.albums.items)
          , catchError((err,caught)=>{

            if(err instanceof HttpErrorResponse && err.status == 401){
              this.auth.authorize();
            }
            return throwError(new Error(err.error.error.message));
          })
        );
      
    }
}

import { map, pluck, catchError, throwIfEmpty } from 'rxjs/operators'
import { empty, throwError } from 'rxjs';
