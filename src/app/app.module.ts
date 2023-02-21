import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './popular/main.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResentEpisodesComponent } from './resent-episodes/resent-episodes.component';
import { AnimeMoviesComponent } from './anime-movies/anime-movies.component';
import { SearchAnimeComponent } from './search-anime/search-anime.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { AnimeGenreComponent } from './anime-genre/anime-genre.component'
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ResentEpisodesComponent,
    AnimeMoviesComponent,
    SearchAnimeComponent,
    AnimeDetailsComponent,
    AnimeGenreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    FormsModule, 
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
