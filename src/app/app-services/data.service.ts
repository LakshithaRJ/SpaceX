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

  getSuccessfulLaunches(year: number, status: boolean): Observable<any> {
    if (year) {
      return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=' + status + '&launch_year=' + year);
    } else {
      return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=' + status);
    }
  }

  getSuccessfulLanding(year: number, status: boolean): Observable<any> {
    if (year) {
      return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&land_success=' + status + '&launch_year=' + year);
    } else {
      return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&land_success=' + status);
    }
  }

  getSuccessfulLaunchAndLanding(year: number, launchStatus: boolean, landingSuccess: boolean): Observable<any> {
    if (year) {
      return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=' + launchStatus + '&land_success=' +
        landingSuccess + '&launch_year=' + year);
    } else {
      return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=' + launchStatus + '&land_success=' +
        landingSuccess);
    }
  }
}
