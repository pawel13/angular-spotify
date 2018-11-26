import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsViewComponent } from './components/playlists-view/playlists-view.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { PlaylistDetailsComponent } from './components/playlist-details/playlist-details.component';

@NgModule({
  declarations: [PlaylistsViewComponent, ItemsListComponent, ListItemComponent, PlaylistDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [PlaylistsViewComponent],
})
export class PlaylistsModule { }
