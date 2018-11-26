import { Component, OnInit, Input } from '@angular/core';
import { Playlist } from 'src/app/model/Playlist';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  @Input('items')
  playlists: Playlist[];
  selected: Playlist;

  constructor() { 
    // setInterval(() => { this.playlists = JSON.parse(JSON.stringify(this.playlists))}, 500);

  }


trackFn(index:number, item:Playlist){
  return item.id;
}
  ngOnInit() {
  }

}
