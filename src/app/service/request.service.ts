import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getValueInRange } from '@ng-bootstrap/ng-bootstrap/util/util';
import { FunctionService } from './function.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient, private fun: FunctionService) { }

// Получить последние эпизоды
  GetRecentEpisodes(page: number){
 return this.http.get(`http://localhost:3000/recent-release?page=${page}`)
}


// Популарные Аниме
GetPopularAnime(page: number){
  return this.http.get(`http://localhost:3000/popular?page=${page}`)
}


// Поиск Аниме
arr: any = [];
GetAnimeSearch(animeKey: string){
return this.http.get(`http://localhost:3000/search?keyw=${animeKey.toLowerCase()}`)
}


// Аниме Фильмы
GetAnimeMovies(page: any){
  return this.http.get(`http://localhost:3000/anime-movies?page=${page}`)
}

// Получите лучший эфир
GetTopAiring(){
  return this.http.get('http://localhost:3000/top-airing?page=1')
}



// Жанр Аниме
arrGenre: any = []
GetAnimeGenres(genre: string,  page: any){
  return this.http.get(`http://localhost:3000/genre/${genre}?page=${page}`)
}


// Детали Анме

GetAnimeDetails(anime:any){
 return this.http.get(`http://localhost:3000/anime-details/${anime}`)
}
}
