import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/model/Album';
import { MusicSearchService } from '../../services/music-search.service';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.scss']
})
export class MusicSearchComponent implements OnInit {

  albums: Album[];
  message: string;

  
  query$ = this.service.getQuery();
  
  albums$ = this.service.getAlbums().pipe(
    tap(albums => {
      this.albums = albums;
    }), catchError( error => this.message = error.message)
  );

  constructor(private service: MusicSearchService) { }

  search(query: string){
    this.service.search(query);
    /* .subscribe((albums:any) => 
    //onNext
    {
      this.albums = albums;
    }, 
    //onError
    error => console.log(error.message),
    //onComplete
    () => { console.log('complete'); }
    ); */
  }

  ngOnInit() {
    this.service.getAlbums().subscribe(
      albums => (this.albums = albums),
      error => (this.message = error.message)
    );

  }

}
