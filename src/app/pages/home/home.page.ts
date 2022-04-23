import { Component, OnDestroy, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  map: L.Map;
  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    
  }

  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    this.map = L.map('map');
    this.map.locate({setView: true, maxZoom: 16});
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © Angular LeafLet',
    }).addTo(this.map);

    
    // L.marker([28.6, 77]).addTo(this.map).bindPopup('Delhi').openPopup();
    // L.marker([34, 77]).addTo(this.map).bindPopup('Leh').openPopup();

    // antPath([[28.644800, 77.216721], [34.1526, 77.5771]],
    //   { color: '#FF0000', weight: 5, opacity: 0.6 })
    //   .addTo(this.map);
  }
}
