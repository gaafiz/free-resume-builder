import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import  'src/assets/js/common';

@Component({
  selector: 'app-edit-education-info',
  templateUrl: './edit-education-info.component.html',
  styleUrls: ['../edit-content-tab.component.scss']
})
export class EditEducationInfoComponent implements OnInit {

  @Input() inputJsonResume: any;
  commonJs = _commonJs;
  itemExpandend = -1;

  constructor() { }

  ngOnInit(): void {
  }

  addNewEducation() {
    if (this.inputJsonResume.education == undefined) {
      this.inputJsonResume.education = [];
    }

    this.inputJsonResume.education.push({
      "studyType": "Bachelor\'s Degree",
      "area": "Natural Science",
      "institution": "My favourite University",
    })
  }

  moveEduToTop(expItem) {
    _commonJs.removeItem(this.inputJsonResume.education, expItem);
    this.inputJsonResume.education.unshift(expItem);
    this.itemExpandend = 0;
  }
}
