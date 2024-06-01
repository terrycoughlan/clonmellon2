import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 53.6055, lng: -6.6564 };
  zoom = 7;
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [
    { lat: 53.6055, lng: -6.6564 }
  ];

  constructor() { }

  ngOnInit() { }

  subscribe(){ }

}
