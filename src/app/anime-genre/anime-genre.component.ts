import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionService } from '../service/function.service';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-anime-genre',
  templateUrl: './anime-genre.component.html',
  styleUrls: ['./anime-genre.component.css']
})
export class AnimeGenreComponent implements OnInit {

  animeGener: any = [];

  gener: string = '';

  page: number = 1

  constructor(private animeService: RequestService, private router: Router, private ActiveRoute: ActivatedRoute, private fun: FunctionService) {

    this.ActiveRoute.params.subscribe((params) => {
      this.gener = params['genre']
      console.log(this.gener)
    })

  animeService.GetAnimeGenres(this.gener, this.page).subscribe((data) =>{
  this.animeGener = data
  })
  
  }


  ngOnInit(): void { }

  showDetalis(anime: any) {
    this.router.navigateByUrl("anime&details/" + anime)
    window.scroll(0, 0)
      }

      next(){
        this.page = this.page + 1
        this.animeService.GetPopularAnime(this.page).subscribe(anime =>{
          this.animeGener = anime
          })
          window.scroll(0, 0)
      }

      back(){
        if( this.page == 0){
          this.page
        }
        else{
        this.page = this.page - 1
        this.animeService.GetAnimeGenres( this.gener ,this.page).subscribe(anime =>{
          this.animeGener = anime
          })
      }
      window.scroll(0, 0)
      }

}
