import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Playlist } from 'src/app/model/Playlist';

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss']
})
export class PlaylistDetailsComponent implements OnInit {
  
  @Input() // ===  @Input('playlist')
  playlist: Playlist;
  @Output()
  playlistChange = new EventEmitter<Playlist>();

  constructor() { } 

  ngOnInit() {
  }
  mode = "show";

  edit(){
    this.mode = "edit";
    console.log("edit");
  }

  cancel(){
    this.mode = "show";
    console.log("cancel");
  }

  save(ngRef){
    // const draft:Partial<Playlist> = ngRef.value;
    const draft:Pick<Playlist, 'name' | 'favourite' | 'color'> = ngRef.value;
    console.log('draft', draft);
    const playlist = {
      // name: this.playlist.name,
      // favourite: this.playlist.favourite,
      // color: this.playlist.color,
      // name: draft.name,
      // favourite: draft.favourite,
      // color: draft.color,
      ...this.playlist,
      ...draft
    }
    console.log('playlist', playlist);
    this.playlistChange.emit(playlist);
    this.mode = "show";
    console.log("save");
  }
}

type PartialPlaylist = {
  [key in keyof Playlist] ?: Playlist[key];
}
