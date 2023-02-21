import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionService } from '../service/function.service';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-search-anime',
  templateUrl: './search-anime.component.html',
  styleUrls: ['./search-anime.component.css']
})
export class SearchAnimeComponent implements DoCheck {

  StrechAnime: any = []


  constructor(private animeService: RequestService, private router: Router, private ActiveRoute: ActivatedRoute, private fun: FunctionService) {
    let anime = ''
    ActiveRoute.params.subscribe((params)=>{
      anime = params['anime']
      console.log(anime)
    })
    this.animeService.GetAnimeSearch(anime).subscribe(anime =>{
      this.StrechAnime = anime
      console.log(anime)
    })
   }

  ngDoCheck(): void {  }
  
  showDetalis(anime: any) {
    this.router.navigateByUrl("anime&details/" + anime)
    window.scroll(0, 0)
      }
  

}
