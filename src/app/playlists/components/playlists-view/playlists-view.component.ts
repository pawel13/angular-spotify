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
    color:'#0faa0f'
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

  save(draft:Playlist){
    const index = this.playlists.findIndex( p => p.id === draft.id);
    if(index !== -1){
      this.playlists.splice(index,1,draft);
      this.selected = draft;
    }
    console.log('draft in view', draft);
  }


}
