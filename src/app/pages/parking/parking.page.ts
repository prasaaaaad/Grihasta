import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.page.html',
  styleUrls: ['./parking.page.scss'],
})
export class ParkingPage implements OnInit {

  currentDate = new Date().toISOString();

  constructor() { }

  ngOnInit() {
  }

}
