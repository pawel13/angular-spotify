import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistsModule } from './playlists/playlists.module';
import { PlaylistsViewComponent } from './playlists/components/playlists-view/playlists-view.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlaylistsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
