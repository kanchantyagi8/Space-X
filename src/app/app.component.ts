import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'SpaceX Launch Programs';
  designer: string = 'Kanchan Tyagi'
  getDataByYearFilter: any;
  getDataByLaunchFilter: any;
  getDataByLandingFilter: any;
}
