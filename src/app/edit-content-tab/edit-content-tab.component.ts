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
  @Input() inputTemplateConfig: any;
  @Output() public userJsonResumeChanged = new EventEmitter<any>();
  @Output() public userTemplateConfChanged = new EventEmitter<any>();
  @ViewChild('ckeditor') ckeditor: CKEditorComponent;
  commonJs = _commonJs

  emailFormControl = new FormControl('', [Validators.email]);

  constructor() {
  }

  ngOnInit(): void {
  }

  onContentFileChanged(event) {
    const files = event.target.files
    if (files.length >= 1 ) {
      const selectedFile = event.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsText(selectedFile, "UTF-8");
      fileReader.onload = () => {
        const fileAsText = fileReader.result as string;
        this.userJsonResumeChanged.emit(JSON.parse(fileAsText));
      }
      fileReader.onerror = (error) => {
        console.log(error);
      }
      event.target.value = '';
    }
  }

  onConfFileChanged(event) {
      const files = event.target.files
      if (files.length >= 1 ) {
        const selectedFile = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsText(selectedFile, "UTF-8");
        fileReader.onload = () => {
          const fileAsText = fileReader.result as string;
          this.userTemplateConfChanged.emit(JSON.parse(fileAsText));
        }
        fileReader.onerror = (error) => {
          console.log(error);
        }

        event.target.value = '';
      }
    }





  downloadObjectAsJson(exportObj, exportName) {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj, null, 2));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  downloadJsonResumeContent() {
    let resume = this.inputJsonResume;
    this.downloadObjectAsJson(resume, "jsonResumeContent");
  }

  downloadTemplateConfig() {
    let templateConf = this.inputTemplateConfig;
    this.downloadObjectAsJson(templateConf, "resumeTemplateConfig");
  }

  removeProfile(profile) {
    let idx = this.inputJsonResume.basics.profiles.indexOf(profile)
    if (idx !== -1) {
      this.inputJsonResume.basics.profiles.splice(idx, 1);
    }
  }
  addNewProfile() {
    this.inputJsonResume.basics.profiles.push({
      "network": "network",
      "username": "username",
      "url": "Link",
    })
  }

  removeAttachment(attachment) {
    let idx = this.inputJsonResume.attachments.indexOf(attachment)
    if (idx !== -1) {
      this.inputJsonResume.attachments.splice(idx, 1);
    }
  }

  addNewAttachment() {
    this.inputJsonResume.attachments.push({
      "label": "My Document",
      "url": "My Document Link",
    })
  }

  removeSkill(skill) {
    let idx = this.inputJsonResume.skills.indexOf(skill)
    if (idx !== -1) {
      this.inputJsonResume.skills.splice(idx, 1);
    }
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

  addItem(arr, item) {
    arr.push(item);
  }

  arrayChunks(inputArray, perChunk) {
    if (inputArray == undefined || inputArray.length == 0) {
      return [];
    }

    var result = inputArray.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index/perChunk)

      if(!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [] // start a new chunk
      }

      resultArray[chunkIndex].push(item)

      return resultArray
    }, [])

    return result;
  }

  arrayChunksIdxs(inputArray, chunkSize) {
      if (inputArray?.length == undefined) {
        return [];
      }

      let l = inputArray.length;
      let rg = [...Array(l).keys()];
      return this.arrayChunks(rg, chunkSize);
  }




  toString(obj) {
    return JSON.stringify(obj);
  }

  toJson(str) {
    return JSON.parse(str);
  }

}
