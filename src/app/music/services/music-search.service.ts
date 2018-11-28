import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Album } from 'src/app/model/Album';
import { HttpClient } from '@angular/common/http';

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
    private http: HttpClient
    ) { }

    getAlbums(): Album[] {
      const request = this.http.get(this.search_api_url, {
        headers: {
          Authorization: 'Bearer abcd'
        },
        params:{
          type: 'album',
          q: 'batman'

        },
        // observe: 'response',
        reportProgress: true,
        responseType: 'arraybuffer',
        withCredentials: true

      })
      request.subscribe(resp => console.log(resp));
      request.subscribe(resp => console.log(resp));
      request.subscribe(resp => console.log(resp));

      console.log('jestem tu');
      return this.albums;
    }
}
