import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  initialData = [];
  launchData = new Subject<any[]>();

  constructor(private http: HttpClient) {
  }

  getInitialData(): Observable<any> {
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100');
  }

  getSuccessfulLaunches(year: number): Observable<any> {
    if (year) {
      return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&launch_year=' + year);
    } else {
      return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true');
    }
  }

  getSuccessfulLanding(year: number): Observable<any> {
    if (year) {
      return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&land_success=true&launch_year=' + year);
    } else {
      return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&land_success=true');
    }
  }

  getSuccessfulLaunchAndLanding(year: number): Observable<any> {
    if (year) {
      return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=' + year);
    } else {
      return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true');
    }
  }

  getSuccessfulLaunchAndLandingForAYear(year: number): Observable<any> {
    return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=' + year);
  }
}
