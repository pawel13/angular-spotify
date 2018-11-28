import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/model/Album';

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.scss']
})
export class MusicSearchComponent implements OnInit {

  albums: Album[];

  constructor() { }


  ngOnInit() {
  }

}
