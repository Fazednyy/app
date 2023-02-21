import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FunctionService } from './service/function.service';
import { RequestService } from './service/request.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

search: string = ''

arr: string[] = []

obj: string = ''
constructor(private fun: FunctionService, private animeService: RequestService, private router: Router){};

ngOnInit(): void{
  this.arr = this.fun.arr
}
searchAnime(){
  this.router.navigateByUrl('sreach/' + this.search)
  location.replace('sreach/' + this.search);
}
scroll(){
  window.scroll(0, 0)
}

gener(str: any){
this.router.navigateByUrl("animeGenre/" + str)
location.replace('animeGenre/' + str);
}
}
