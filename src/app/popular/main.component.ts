import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionService } from '../service/function.service';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  PopularEpisodes: any = []

  page: number = 1
  
  constructor(private animeService: RequestService, private router: Router, private ActiveRoute: ActivatedRoute, private fun: FunctionService) { }

  ngOnInit(): void {
    this.animeService.GetPopularAnime(this.page).subscribe(anime =>{
      this.PopularEpisodes = anime
      })
  }
  showDetalis(anime: any) {
    this.router.navigateByUrl("anime&details/" + anime)
    window.scroll(0, 0)
      }

      next(){
        this.page = this.page + 1
        this.animeService.GetPopularAnime(this.page).subscribe(anime =>{
          this.PopularEpisodes = anime
          })
          window.scroll(0, 0)
      }

      back(){
        if( this.page == 0){
          this.page
        }
        else{
        this.page = this.page - 1
        this.animeService.GetPopularAnime(this.page).subscribe(anime =>{
          this.PopularEpisodes = anime
          })
      }
      window.scroll(0, 0)
      }

}
