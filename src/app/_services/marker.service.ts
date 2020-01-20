import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopUpService } from './pop-up.service';



@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  constructor(private http: HttpClient,
    private popupService: PopUpService) { 
  } 

  sendPostRequest(payload, map: L.map):void {
    console.log(payload + " finally reached here");
    const server = "http://checklocation.us-east-1.elasticbeanstalk.com/";
    const address_body = "\"" + payload + "\"";
    console.log(server);
    console.log(address_body);
    this.http.post(server,{"address": address_body}).subscribe(
      res => {
        console.log(res);
        for (const c of res) {
          const lat = c.location.lat;
          const lon = c.location.lon;
          console.log(c.text + " lat is " + lat+ " and lon is " + lon);
          const marker = L.marker([lat, lon]).addTo(map);
          marker.bindPopup(this.popupService.makeCapitalPopup(c));
          marker.addTo(map);
        }
      },
      err => {
        console.log("Error occured" + err);
      }
    );
  }
}