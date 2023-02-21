import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionService } from '../service/function.service';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent implements OnInit {
  
  animeDetails: any

  
  constructor(private animeService: RequestService, private router: Router, private ActiveRoute: ActivatedRoute, private fun: FunctionService) { 
    let anime = ''
    this.ActiveRoute.params.subscribe((params) =>{
      anime = params['name']
      console.log(anime)
    })

    this.animeService.GetAnimeDetails(anime).subscribe(data =>{
      this.animeDetails = data
    })
  }

  ngOnInit(): void {
    
   
  }
    click(){
      console.log(this.animeDetails)


      }

  }


