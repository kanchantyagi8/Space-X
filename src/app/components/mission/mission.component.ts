import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
  constructor() { }

  @Input() spaceCraftDetails: any;

  ngOnInit(): void {
  }
}
