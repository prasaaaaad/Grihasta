import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temple',
  templateUrl: './temple.page.html',
  styleUrls: ['./temple.page.scss'],
})
export class TemplePage implements OnInit {
  pageType: string = 'LiveDarshan';

  constructor() { }

  ngOnInit() {
  }

}
