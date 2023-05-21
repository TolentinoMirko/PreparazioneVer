import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeoFeatureCollection } from 'src/models/geojson.model';

import { Marker } from 'src/models/marker.model';
import { Prova } from 'src/models/prova.model';

//ricordati nell'index.html di mettere lo script:
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_z624KbEac7jy2TdIXtWT4uqWcgW90Vg"></script><!--da copiare e incollare-->

//ricordati nel app.modeule.ts di mettere tutti gli import 
//quando avvii il file angular per sicurezza scrivi : ng serve --disable-host-check --host=0.0.0.0
// e quando avvii accertati che la porta di python sia aperta

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ang-maps';
  // google maps zoom level
  zoom: number = 8;
  geoJsonObject!: GeoFeatureCollection; //Oggetto che conterrà il vettore di GeoJson
  fillColor: string = "#FF0000";  //Colore delle zone catastali
  markers!: Marker[];  //Vettore con tutti i marker


  url!: "https://5000-tolentinomi-preparazion-lmty2y4ie8w.ws-eu97.gitpod.io/noncapisconulla"; //url della route in cui si trova il json

  constructor(public http: HttpClient) {
  }

  ngOnInit() {
    //features[0] seleziona il primo geoJson
    //coordinates[0] ottiene la lista di poligoni.
    //coordinates[0][0] ottiene il primo (e unico) poligono della lista
    //coordinates[0][0][0] ottiene la longitudine
    //coordinates[0][0][1] ottiene la latitudine
    /*this.markers = [
      {
        lng: this.geoJsonObject.features[0].geometry.coordinates[0][0][0],
        lat: this.geoJsonObject.features[0].geometry.coordinates[0][0][1],
        label: String(this.geoJsonObject.features[0].properties.id),
      },
      {
        lng: this.geoJsonObject.features[1].geometry.coordinates[0][0][0],
        lat: this.geoJsonObject.features[1].geometry.coordinates[0][0][1],
        label: String(this.geoJsonObject.features[1].properties.id),
      }
    ]*/

    //Uso di un ciclo foreach per riempire i marker
    this.markers = [];

// richiesta al server python se ci danno un geojson
  //  this.http.get<GeoFeatureCollection>(this.url).subscribe(data => {
  //   for (let feature of data.features) {
  //      let lng = feature.geometry.coordinates[0][0][0];
  //     let lat = feature.geometry.coordinates[0][0][1];
  //     let id = String(feature.properties.id);
  //     let marker: Marker = new Marker(lat, lng, id);
  //    this.markers.push(marker);
  //  }
  //  })



                  //prova è il modello dove trasforma il json inviato nelle variabili li scritti 
    this.http.get<Prova[]>("https://5000-tolentinomi-preparazion-lmty2y4ie8w.ws-eu97.gitpod.io/noncapisconulla").subscribe(data =>{
     for (let d of data) { //questo let permette di fare un ciclo all'interno di data(dove c'è il json)
      let lng = d.lng //mette le variabili lng e lat le proprietà lng e lat del json
      let lat = d.lat
      let marker: Marker = new Marker(lat, lng);//mette le coordinate del marker
      this.markers.push(marker)
     }
    })

    //    this.http.get<Prova[]>(this.url).subscribe(data =>{
    //let lng = data[0][0]
    //let lat = data[0][1]

    //})
  }
}
