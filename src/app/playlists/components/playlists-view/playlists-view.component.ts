import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/model/Playlist';

@Component({
  selector: 'app-playlists-view',
  templateUrl: './playlists-view.component.html',
  styleUrls: ['./playlists-view.component.scss']
})
export class PlaylistsViewComponent implements OnInit {
  playlists: Playlist[] = [
    {
    id:1,
    name:'Hits 2018',
    favourite:true,
    color:'#0000ff'
  },
  {
    id:2,
    name:'Hits 2017',
    favourite:false,
    color:'#0faa0ff'
  },
  {
    id:3,
    name:'Hits 2016',
    favourite:false,
    color:'#df00ff'
  }
];

  selected: Playlist = this.playlists[2];

  constructor() { }

  ngOnInit() {
  }

}
