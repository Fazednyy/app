import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { main } from '@popperjs/core';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { AnimeGenreComponent } from './anime-genre/anime-genre.component';
import { AnimeMoviesComponent } from './anime-movies/anime-movies.component';
import { MainComponent } from './popular/main.component';
import { ResentEpisodesComponent } from './resent-episodes/resent-episodes.component';
import { SearchAnimeComponent } from './search-anime/search-anime.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'main', component: MainComponent},
  {path: 'recent&episodes', component: ResentEpisodesComponent},
  {path: 'anime&movies', component: AnimeMoviesComponent},
  {path: 'sreach/:anime', component: SearchAnimeComponent},
  {path: 'anime&details/:name', component: AnimeDetailsComponent},
  {path: 'animeGenre/:genre', component: AnimeGenreComponent}
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
