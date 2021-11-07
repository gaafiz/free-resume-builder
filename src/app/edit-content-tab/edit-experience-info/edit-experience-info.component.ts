import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import  'src/assets/js/common';

@Component({
  selector: 'app-edit-experience-info',
  templateUrl: './edit-experience-info.component.html',
  styleUrls: ['../edit-content-tab.component.scss']
})
export class EditExperienceInfoComponent implements OnInit {
  @Input() inputJsonResume: any;
  commonJs = _commonJs;
  expItemExpandend = -1;

  constructor() { }

  ngOnInit(): void {
  }

  ckEditorProjectFieldConfig: any = _commonJs.extendObj(_commonJs.ckEditorDefaultConfig, {
    height: 75
  });

  addNewProject(expItem) {
    if(expItem.projects == undefined) {
      expItem.projects = [];
    }

    expItem.projects.push({
      "name": "Project Name",
      "summary": "A Brief Project Summary",
    });
  }

  removeProject(expItem, project) {
    _commonJs.removeItem(expItem.projects, project);
  }

  addNewExperience() {
    if (this.inputJsonResume.work == undefined) {
      this.inputJsonResume.work = [];
    }

    this.inputJsonResume.work.push({
      "company": "Nice Company",
      "position": "Employee",
      "startDate": "2000-10",
      "summary": "I'm doing many things here"
    })
  }

  moveExpToTop(expItem) {
    _commonJs.removeItem(this.inputJsonResume.work, expItem);
    this.inputJsonResume.work.unshift(expItem);
    this.expItemExpandend = 0;
  }
}
