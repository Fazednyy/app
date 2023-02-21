import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionService } from '../service/function.service';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-resent-episodes',
  templateUrl: './resent-episodes.component.html',
  styleUrls: ['./resent-episodes.component.css']
})
export class ResentEpisodesComponent implements OnInit {

resentEpisodes: any = []

page: number = 0

  constructor(private animeService: RequestService , private router: Router, private ActiveRoute: ActivatedRoute, private fun: FunctionService) { }

  ngOnInit(): void {
    this.animeService.GetRecentEpisodes(this.page).subscribe(anime =>{
      this.resentEpisodes = anime
    })
  }

  showDetalis(anime: any) {
    this.router.navigateByUrl("anime&details/" + anime)
    window.scroll(0, 0)
      }

      next(){
        this.page = this.page + 1
        this.animeService.GetRecentEpisodes(this.page).subscribe(anime =>{
          this.resentEpisodes = anime
        })
        window.scroll(0, 0)
      }

      back(){
        if( this.page == 0){
          this.page
        }
        else{
        this.page = this.page - 1
        this.animeService.GetRecentEpisodes(this.page).subscribe(anime =>{
          this.resentEpisodes = anime
        })
      }
      window.scroll(0, 0)
      }
}
