import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/model/Album';

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.scss']
})
export class MusicSearchComponent implements OnInit {

  albums: Album[] = [
      {
        id: '123',
        name: 'Album test',
        images: [
          {url: 'https://www.placecage.com/gif/200/300'}
        ]
      }
  ];
  constructor() { }


  ngOnInit() {
  }

}
