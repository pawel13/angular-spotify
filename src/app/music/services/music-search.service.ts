import { Injectable, Inject, InjectionToken, EventEmitter } from '@angular/core';
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
        { url: 'https://www.placecage.com/c/200/300' }
      ]
    },
    {
      id: '345',
      name: 'Album test2',
      images: [
        { url: 'http://placekitten.com/200/300' }
      ]
    }
  ];
  constructor(
    @Inject(SEARCH_URL) private search_api_url: string,
    private http: HttpClient,
    private auth: AuthService
  ) { }

  search(query: string): any {
    return this.http.get<AlbumsResponse>(this.search_api_url, {
      params: {
        type: 'album',
        q: query
      }
      // observe: 'response',
      // reportProgress: true,
      // responseType: 'arraybuffer',
      //withCredentials: true

    }).pipe(
      // pluck<AlbumsResponse, Album[]>("albums","items")
      map(resp => resp.albums.items)
    ).subscribe(
      albums => {
        this.albumsChange.emit(albums)
      }
    );

  }
  albumsChange = new EventEmitter<Album[]>();


  getAlbums() {
    return this.albumsChange.asObservable();

  }
}

import { map, pluck, catchError, throwIfEmpty } from 'rxjs/operators'
import { empty, throwError, of } from 'rxjs';

