import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/model/Album';

@Component({
  selector: 'app-albums-card',
  templateUrl: './albums-card.component.html',
  styleUrls: ['./albums-card.component.scss']
})
export class AlbumsCardComponent implements OnInit {

  @Input()
  album: Album;
  
  constructor() { }

  ngOnInit() {
  }

}
