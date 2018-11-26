import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/model/Playlist';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  constructor() { }

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
  ngOnInit() {
  }

}
