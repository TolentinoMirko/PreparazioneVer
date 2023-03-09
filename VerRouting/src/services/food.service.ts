import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

//per generare un servizio bisogna scrivere ng generate service food


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http : HttpClient) {}
}
