import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/model/Album';
import { MusicSearchService } from '../../services/music-search.service';

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.scss']
})
export class MusicSearchComponent implements OnInit {

  albums: Album[];

  constructor(private service: MusicSearchService) { }

  search(query: string){
    this.service.getAlbums(query)
    .subscribe((albums:any) => 
    //onNext
    {
      this.albums = albums;
    }, 
    //onError
    error => console.log(error.message),
    //onComplete
    () => { console.log('complete'); }
    );
  }

  ngOnInit() {

  }

}
