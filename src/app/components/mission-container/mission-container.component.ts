import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-mission-container',
  templateUrl: './mission-container.component.html',
  styleUrls: ['./mission-container.component.css']
})
export class MissionContainerComponent implements OnInit, AfterContentChecked {
  missionData: Array<Object> = [];
  data: Array<any>;
  totalRecords: any;
  page: any = 1;

  constructor( private sharedService: SharedService, private cdref: ChangeDetectorRef ) { 
    this.data = new Array();
  }

  @Input() getSelectedYear: any;
  @Input() getLaunch: any;
  @Input() getLanding: any;

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.missionData = this.sharedService.getData();
    if(this.missionData) {
      this.data = this.missionData;
      this.totalRecords = this.missionData.length;
    }
    this.cdref.detectChanges();
  }

  pageChanged(event){
    this.page = event;
  }
}
