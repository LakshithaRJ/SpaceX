import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './app-cards.component.html',
  styleUrls: ['./app-cards.component.scss']
})
export class AppCardsComponent implements OnInit {
  @Input() cardData: any;

  constructor() {
  }

  ngOnInit() {
  }

}
