import {Component, OnInit} from '@angular/core';
import {DataService} from '../../app-services/data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  launchYear = {
    start: 2006,
    end: new Date().getFullYear()
  };
  currentSelectedYear: number;
  previousSelectedYear = 0;
  launchStatus = true;
  landingStatus = true;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  onYearSelected(year: number) {
    this.currentSelectedYear = year === this.previousSelectedYear ? 0 : year;
    this.previousSelectedYear = this.currentSelectedYear;
    this.dataService.getSuccessfulLaunchAndLanding(this.currentSelectedYear, this.launchStatus, this.landingStatus).subscribe(res => {
      this.dataService.launchData.next(res);
    });
  }

  fetchSuccessfulLaunches(value: boolean) {
    this.launchStatus = value;
    this.dataService.getSuccessfulLaunches(this.currentSelectedYear, value).subscribe(res => {
      this.dataService.launchData.next(res);
    });
  }

  fetchSuccessfulLanding(value: boolean) {
    this.landingStatus = value;
    this.dataService.getSuccessfulLanding(this.currentSelectedYear, value).subscribe(res => {
      this.dataService.launchData.next(res);
    });
  }
}
