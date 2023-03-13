import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

//per generare un servizio bisogna scrivere ng generate service food


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http : HttpClient) {}

SearchFoods(query: string){
  const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&json=true`; //ogni volta che si fa una richiesta l'api ci DEVE ritornare un JSON 
  
  let obsFood = this.http.get(url);
  return obsFood;

}
}