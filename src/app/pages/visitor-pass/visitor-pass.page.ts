import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitor-pass',
  templateUrl: './visitor-pass.page.html',
  styleUrls: ['./visitor-pass.page.scss'],
})
export class VisitorPassPage implements OnInit {

  currentDate = new Date().toISOString();
  passType: string = 'single';

  constructor() { }

  ngOnInit() { }

}
