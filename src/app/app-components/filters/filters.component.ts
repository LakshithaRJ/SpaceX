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
  currentSelectedYear = 0;
  previousSelectedYear = 0;
  initialData = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getSuccessfulLaunchAndLanding(this.currentSelectedYear).subscribe(res => {
      this.initialData = res;
    });
  }

  onYearSelected(year: number) {
    this.currentSelectedYear = year === this.previousSelectedYear ? 0 : year;
    this.previousSelectedYear = this.currentSelectedYear;
    this.dataService.getSuccessfulLaunchAndLanding(this.currentSelectedYear).subscribe(res => {
      this.dataService.launchData.next(res);
    });
  }

  fetchSuccessfulLaunches(value: boolean) {
    if (value) {
      this.dataService.getSuccessfulLaunches(this.currentSelectedYear).subscribe(res => {
        console.log(res);
      });
    }
  }
}
