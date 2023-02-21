import { Component, DoCheck, OnChanges, OnInit, SimpleChanges, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionService } from '../service/function.service';
import { RequestService } from '../service/request.service';
@Component({
  selector: 'app-anime-movies',
  templateUrl: './anime-movies.component.html',
  styleUrls: ['./anime-movies.component.css']
})
export class AnimeMoviesComponent implements OnInit {

  animeMovies: any = []

  page: number = 1

  constructor(private animeService: RequestService, private router: Router, private ActiveRoute: ActivatedRoute, private fun: FunctionService) { }

  ngOnInit(): void {
    this.animeService.GetAnimeMovies(this.page).subscribe(anime => {
      this.animeMovies = anime
      console.log(this.animeMovies)
    })
  }


  showDetalis(anime: any) {
    this.router.navigateByUrl("anime&details/" + anime)
    window.scroll(0, 0)
  }
  next() {
    this.page = this.page + 1
    console.log(this.page)
    this.animeService.GetAnimeMovies(this.page).subscribe(anime => {
      this.animeMovies = anime
    })
    window.scroll(0, 0)
  }

  back() {
    if (this.page == 0) {
      this.page

    }
    else {
      this.page = this.page - 1
      console.log(this.page)
      this.animeService.GetAnimeMovies(this.page).subscribe(anime => {
        this.animeMovies = anime
      })
    }
    window.scroll(0, 0)
  }



}
