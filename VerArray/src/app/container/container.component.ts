import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  names :string[];
  constructor() { 
    this.names = ['Escavatori','Terne','Pale','Minipale','Dumpers','Bulldozer','Motolivellatrici','Rulli-Compattatori','Piastre-vibranti','Finitrici']
  }
  
  ngOnInit(): void {
  }

}
