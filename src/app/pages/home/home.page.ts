import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {
  map: L.Map;
  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    this.map = L.map('map');
    this.map.locate({setView: true, maxZoom: 18});
    this.map.on('locationfound', location => {
      console.log(location);
      L.marker([location.latitude, location.longitude]).addTo(this.map);
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © Angular LeafLet',
    }).addTo(this.map);

  }

  ngOnDestroy() {
    this.map.remove();
  }
}
