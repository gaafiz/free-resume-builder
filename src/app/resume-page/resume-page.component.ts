import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import 'src/assets/js/common';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss']
})
export class ResumePageComponent implements OnInit {

  @Input() jsonResume: any;
  @Input() templateConf: any;
  @Input() style: any;

  commonJs = _commonJs


  constructor() { }

  ngOnInit(): void {
  }

  leftSections() {
    return this.templateConf?.leftColSections;
  }

  rightSections() {
    return this.templateConf?.rightColSections;
  }

  showLeftCol() {
    let leftColSections = this.templateConf?.leftColSections;
    return (leftColSections && leftColSections.length && leftColSections.length > 0);
  }

  rightSectionAdditionalClasses() {
    if (this.showLeftCol()) {
      return "";
    } else {
      return "expand-to-full-page";
    }
  }

}
