import { Component, OnInit, ViewChild } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import 'src/assets/js/common';

@Component({
  selector: 'app-edit-layout-tab',
  templateUrl: './edit-layout-tab.component.html',
  styleUrls: ['../edit-content-tab/edit-content-tab.component.scss']
})
export class EditLayoutTabComponent implements OnInit {
  @Input() inputTemplateLayoutConfig: any;
  @Output() public templateLayoutConfigChanged = new EventEmitter<any>();
  commonJs = _commonJs


  constructor() { }

  ngOnInit(): void {
  }

  onLayoutConfFileChanged(event) {
    _commonJs.doOnFileChange(event, (fileAsText) => {
      this.templateLayoutConfigChanged.emit(JSON.parse(fileAsText));
    })
  }

  downloadTemplateLayoutConfig() {
    _commonJs.downloadObjectAsJson(this.inputTemplateLayoutConfig, "resumeLayoutConfig");
  }

  getLeftColumnSections() {
    let sections = this.inputTemplateLayoutConfig.leftColSections
    if (sections && sections.length && sections.length > 0) {
      return sections.join("; ");
    } else {
      return ""
    }
  }

  setLeftColumnSections(sectionsStr) {
    if (sectionsStr && sectionsStr != "") {
      this.inputTemplateLayoutConfig.leftColSections = sectionsStr.split(";").map(s => s.trim()).filter(s => s != "");
    } else {
      this.inputTemplateLayoutConfig.leftColSections = [];
    }
  }

  getRightColumnSections() {
    let sections = this.inputTemplateLayoutConfig.rightColSections
    if (sections && sections.length && sections.length > 0) {
      return sections.join("; ");
    } else {
      return ""
    }
  }

  setRightColumnSections(sectionsStr) {
    if (sectionsStr && sectionsStr != "") {
      this.inputTemplateLayoutConfig.rightColSections = sectionsStr.split(";").map(s => s.trim()).filter(s => s != "");
    } else {
      this.inputTemplateLayoutConfig.rightColSections = [];
    }
  }

}
