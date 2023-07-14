import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  transcriptUrl: any
  constructor(private profileService:ProfileService) { }

  //constructor() { }

  ngOnInit() {

    this.transcriptUrl =  this.profileService.transcripturl
  }

}
