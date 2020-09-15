import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';
import { SharedService } from '../../services/shared.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  launchYears: Array<string> = ['2006','2007','2008','2009','2010','2011','2012', '2013','2014','2015', '2016','2017','2018','2019','2020','2021'];
  successLaunch: Array<string> = ['true', 'false'];
  successLanding: Array<string> = ['true', 'false'];
  allMissions: Array<Object> = [];
  filterData: any;
  yearSelect: string;
  launchSelect: string;
  landSelect: string;

  constructor( private location: Location,
    private spacexService: SpacexService, 
    private sharedService: SharedService) { }

  @Output() selectedYear = new EventEmitter();
  @Output() launchDetail = new EventEmitter();
  @Output() landingDetail = new EventEmitter();

  ngOnInit(): void {
    this.filterData = {_year: '', _launch: '', _landing:''};
    this.getAllSpaceCrafts(this.filterData);
  }

  yearFilter(year: string) {
    if(this.filterData._year === year) {
      this.filterData._year = '';
      this.yearSelect = '';
      this.location.back();
    } else {
      this.filterData._year = year;
      this.yearSelect = year;
      this.location.go(`/&launch_year=${year}`);
    }
      this.getAllSpaceCrafts(this.filterData);
      this.selectedYear.emit(this.allMissions);
  }

  launchFilter(launch: string) {
    if(this.filterData._launch === launch) {
      this.filterData._launch = '';
      this.launchSelect = '';
      this.location.back();
    } else {
      this.filterData._launch = launch;
      this.launchSelect = launch;
      this.location.go(`/&launch_success=${launch}`);
    }
    this.getAllSpaceCrafts(this.filterData);
    this.launchDetail.emit(this.allMissions);
  }

  landingFilter(landing: string) {
    if(this.filterData._landing === landing) {
      this.landSelect = '';
      this.filterData._landing = '';
      this.location.back();
    } else {
      this.landSelect = landing;
      this.filterData._landing = landing;
      this.location.go(`/&land_success=${landing}`);
    }
    this.getAllSpaceCrafts(this.filterData);
    this.landingDetail.emit(this.allMissions);
  }

  getAllSpaceCrafts(filter_data) {
    this.spacexService.get(filter_data).then(data => {
        this.allMissions = [];
        data.forEach(element => {
          let allReports = {
            img: element.links.mission_patch_small,
            video: element.links.video_link,
            wiki: element.links.wikipedia,
            name: element.mission_name,
            flight_num: element.flight_number,
            id: element.mission_id.length > 0 ? element.mission_id : 'N/A',
            year: element.launch_year,
            launch_report: element.launch_success,
            landing_report: element.rocket.first_stage.cores[0].land_success === null ? false : element.rocket.first_stage.cores[0].land_success
          };
          this.allMissions.push(allReports);
        });
        this.sharedService.setData(this.allMissions);
      })
    .catch((error) => {
      console.log("Error is: ", error);
    })
  }

}
