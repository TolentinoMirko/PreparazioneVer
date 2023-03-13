import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodService } from 'src/services/food.service';

//mettere nel app.module.ts negli import HTTPclientModule


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

 query!:string;
 obsFood! :Observable<object>;
 results:any;

 constructor (public foods : FoodService){

 }

submit(query:HTMLInputElement):void{

  if (!query.value) {
    return;
  }
  this.query = query.value;
  this.obsFood = this.foods.SearchFoods(this.query); //appena cerchiamo qualcosa verrà utilizzata la funzione searchfood del servizio foods e lo metterà nell'observable
  this.obsFood.subscribe((data) => { this.results = data; console.log(this.results) }); //appena nell'obs arriva qualcosa lo sovrascrive a data che verrà stampato nel log
}

renderResults(res: any): void {
  this.results = null;
  if (res && res.products ) {
    this.results = res;
  }
}




}
