import {Component, OnInit} from '@angular/core';
import {DataService} from '../../app-services/data.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {
  launchCardData = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getInitialData().subscribe(res => {
      this.launchCardData = res;
    });

    this.dataService.launchData.subscribe(res => {
      this.launchCardData = res;
    });
  }


}
