import { Component, OnInit, ViewChild } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { CKEditorComponent } from 'ng2-ckeditor';
import {FormControl, Validators} from '@angular/forms';
import 'src/assets/js/common';

@Component({
  selector: 'app-edit-content-tab',
  templateUrl: './edit-content-tab.component.html',
  styleUrls: ['./edit-content-tab.component.scss']
})
export class EditContentTabComponent implements OnInit {
  @Input() inputJsonResume: any;
  @Output() public userJsonResumeChanged = new EventEmitter<any>();
  @ViewChild('ckeditor') ckeditor: CKEditorComponent;
  commonJs = _commonJs

  emailFormControl = new FormControl('', [Validators.email]);

  constructor() {
  }

  ngOnInit(): void {
  }

  onContentFileChanged(event) {
    _commonJs.doOnFileChange(event, (fileAsText) => {
      this.userJsonResumeChanged.emit(JSON.parse(fileAsText));
      alert('Content Loaded Successfully');
    })
  }

  downloadJsonResumeContent() {
    let resume = this.inputJsonResume;
    let name = _commonJs.camelizeString(this.inputJsonResume.basics.name);
    _commonJs.downloadObjectAsJson(resume, name + "_resumeContent");
  }

  removeProfile(profile) {
    _commonJs.removeItem(this.inputJsonResume.basics.profiles, profile)
  }

  addNewProfile() {
    this.inputJsonResume.basics.profiles.push({
      "network": "network",
      "username": "username",
      "url": "Link",
    })
  }

  removeAttachment(attachment) {
    _commonJs.removeItem(this.inputJsonResume.attachments, attachment)
  }

  addNewAttachment() {
    this.inputJsonResume.attachments.push({
      "label": "My Document",
      "url": "My Document Link",
    })
  }

  removeSkill(skill) {
   _commonJs.removeItem(this.inputJsonResume.skills, skill)
  }

  addNewSkill() {
    this.inputJsonResume.skills.push({
      "name": "A Skill of Mine",
      "keywords": [ "sample keyword" ],
    })
  }

  getSkillKeywords(skill) {
    if (skill && skill.keywords && skill.keywords.length > 0) {
      return skill.keywords.join("; ");
    } else {
      return ""
    }
  }

  setSkillKeywords(skill, keywordsStr) {
    if (keywordsStr && keywordsStr != "") {
      skill.keywords = keywordsStr.split(";").map(s => s.trim()).filter(s => s != "");
    } else {
      skill.keywords = [];
    }
  }

  addNewLanguage() {
    this.inputJsonResume.languages.push({
      "countryCode": "gb",
      "language": "English",
      "fluency": "Working Proficiency",
    })
  }
}
